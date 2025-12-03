import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkMobileNumber, resetMobileCheck, verifyFace } from '@/redux/slices/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { FiSmartphone, FiLock, FiUser, FiMic, FiCamera, FiCheck } from 'react-icons/fi'

export default function LoginPage() {
    const [mobile, setMobile] = useState('')
    const [step, setStep] = useState('mobile')
    const videoRef = useRef(null)
    const [stream, setStream] = useState(null)
    const [capturedImage, setCapturedImage] = useState(null)

    const dispatch = useDispatch()
    const {
        mobileCheckLoading, mobileCheckError, mobileCheckSuccess, mobileUser,
        faceVerificationLoading, faceVerificationError, faceVerificationSuccess
    } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    console.log('Login State:', { mobileCheckLoading, mobileCheckError, mobileCheckSuccess, mobileUser, step, faceVerificationSuccess })

    useEffect(() => {
        // Reset state on mount
        dispatch(resetMobileCheck())
    }, [dispatch])

    useEffect(() => {
        console.log('Effect triggered:', { mobileCheckSuccess, mobileUser })
        if (mobileCheckSuccess && mobileUser && step === 'mobile') {
            console.log('Setting step to auth-method')
            setStep('auth-method')
        }
    }, [mobileCheckSuccess, mobileUser, step])

    useEffect(() => {
        if (faceVerificationSuccess) {
            // Stop camera stream if active
            if (stream) {
                stream.getTracks().forEach(track => track.stop())
            }
            navigate('/dashboard')
        }
    }, [faceVerificationSuccess, navigate, stream])

    const handleMobileSubmit = (e) => {
        e.preventDefault()
        if (mobile.length >= 10) {
            dispatch(checkMobileNumber(mobile))
        }
    }

    const handleAuthMethodSelect = (method) => {
        console.log(`Selected auth method: ${method}`)
        if (method === 'face') {
            setStep('face-capture')
            startCamera()
        } else {
            // For now, just navigate to a dummy page or show success
            // In a real app, this would trigger the respective auth flow
            navigate('/dashboard')
        }
    }

    const startCamera = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true })
            setStream(mediaStream)
            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream
            }
        } catch (err) {
            console.error("Error accessing camera:", err)
            alert("Could not access camera. Please allow camera permissions.")
        }
    }

    const captureImage = () => {
        if (videoRef.current) {
            const canvas = document.createElement('canvas')
            canvas.width = videoRef.current.videoWidth
            canvas.height = videoRef.current.videoHeight
            const ctx = canvas.getContext('2d')
            if (ctx) {
                ctx.drawImage(videoRef.current, 0, 0)
                const imageSrc = canvas.toDataURL('image/jpeg')
                setCapturedImage(imageSrc)

                // Log base64 for Eswar
                console.log("--- CAPTURED FACE BASE64 START ---")
                console.log(imageSrc)
                console.log("--- CAPTURED FACE BASE64 END ---")

                // Stop stream after capture
                if (stream) {
                    stream.getTracks().forEach(track => track.stop())
                    setStream(null)
                }
            }
        }
    }

    const retakeImage = () => {
        setCapturedImage(null)
        startCamera()
    }

    const submitFaceVerification = () => {
        if (capturedImage && mobileUser?.uid) {
            dispatch(verifyFace({ image: capturedImage, uid: mobileUser.uid }))
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-green-400">
                        {step === 'mobile' ? 'Client Login' : `Welcome ${mobileUser?.name || 'User'}`}
                    </h2>
                    <p className="text-gray-400 mt-2">
                        {step === 'mobile' ? 'Enter your registered mobile number' :
                            step === 'face-capture' ? 'Face Verification' : 'Choose authentication method'}
                    </p>
                </div>

                {mobileCheckError && (
                    <div className="p-3 text-sm text-red-500 bg-red-100 rounded border border-red-400">
                        {mobileCheckError}
                    </div>
                )}

                {faceVerificationError && (
                    <div className="p-3 text-sm text-red-500 bg-red-100 rounded border border-red-400">
                        {faceVerificationError}
                    </div>
                )}

                {step === 'mobile' && (
                    <form onSubmit={handleMobileSubmit} className="space-y-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-300">Mobile Number</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiSmartphone className="text-gray-400" />
                                </div>
                                <input
                                    type="tel"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    className="w-full pl-10 px-4 py-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-500"
                                    placeholder="Enter 10 digit number"
                                    required
                                    pattern="[0-9]{10}"
                                    maxLength={10}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={mobileCheckLoading}
                            className={`w-full py-3 font-bold text-black bg-green-500 rounded hover:bg-green-400 transition duration-200 flex items-center justify-center ${mobileCheckLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {mobileCheckLoading ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Verifying...
                                </span>
                            ) : 'Next'}
                        </button>
                    </form>
                )}

                {step === 'auth-method' && (
                    <div className="space-y-4">
                        <button
                            onClick={() => handleAuthMethodSelect('pin')}
                            className="w-full p-4 flex items-center justify-between bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors border border-gray-600 hover:border-green-500 group"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-gray-800 rounded-full group-hover:bg-green-500/20 transition-colors">
                                    <FiLock className="w-6 h-6 text-green-400" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-white">PIN Authentication</h3>
                                    <p className="text-sm text-gray-400">Enter your security PIN</p>
                                </div>
                            </div>
                            <span className="text-gray-400 group-hover:text-green-400">→</span>
                        </button>

                        <button
                            onClick={() => handleAuthMethodSelect('face')}
                            className="w-full p-4 flex items-center justify-between bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors border border-gray-600 hover:border-green-500 group"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-gray-800 rounded-full group-hover:bg-green-500/20 transition-colors">
                                    <FiUser className="w-6 h-6 text-green-400" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-white">Face ID</h3>
                                    <p className="text-sm text-gray-400">Scan your face</p>
                                </div>
                            </div>
                            <span className="text-gray-400 group-hover:text-green-400">→</span>
                        </button>

                        <button
                            onClick={() => handleAuthMethodSelect('voice')}
                            className="w-full p-4 flex items-center justify-between bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors border border-gray-600 hover:border-green-500 group"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-gray-800 rounded-full group-hover:bg-green-500/20 transition-colors">
                                    <FiMic className="w-6 h-6 text-green-400" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-white">Voice Match</h3>
                                    <p className="text-sm text-gray-400">Verify with your voice</p>
                                </div>
                            </div>
                            <span className="text-gray-400 group-hover:text-green-400">→</span>
                        </button>

                        <button
                            onClick={() => {
                                setStep('mobile')
                                dispatch(resetMobileCheck())
                                setMobile('')
                            }}
                            className="w-full mt-4 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            Use a different number
                        </button>
                    </div>
                )}

                {step === 'face-capture' && (
                    <div className="space-y-6 text-center">
                        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden border-2 border-green-500">
                            {!capturedImage ? (
                                <video
                                    ref={videoRef}
                                    autoPlay
                                    playsInline
                                    className="w-full h-full object-cover transform scale-x-[-1]"
                                />
                            ) : (
                                <img
                                    src={capturedImage}
                                    alt="Captured"
                                    className="w-full h-full object-cover transform scale-x-[-1]"
                                />
                            )}
                        </div>

                        <div className="flex space-x-4 justify-center">
                            {!capturedImage ? (
                                <button
                                    onClick={captureImage}
                                    className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center space-x-2"
                                >
                                    <FiCamera className="w-5 h-5" />
                                    <span>Capture</span>
                                </button>
                            ) : (
                                <>
                                    <button
                                        onClick={retakeImage}
                                        className="px-6 py-3 bg-gray-600 text-white font-bold rounded-full hover:bg-gray-500 transition-colors"
                                    >
                                        Retake
                                    </button>
                                    <button
                                        onClick={submitFaceVerification}
                                        disabled={faceVerificationLoading}
                                        className="px-6 py-3 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 transition-colors flex items-center space-x-2"
                                    >
                                        {faceVerificationLoading ? (
                                            <span>Verifying...</span>
                                        ) : (
                                            <>
                                                <FiCheck className="w-5 h-5" />
                                                <span>Verify</span>
                                            </>
                                        )}
                                    </button>
                                </>
                            )}
                        </div>
                        <button
                            onClick={() => {
                                if (stream) {
                                    stream.getTracks().forEach(track => track.stop())
                                    setStream(null)
                                }
                                setStep('auth-method')
                            }}
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            Back to methods
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
