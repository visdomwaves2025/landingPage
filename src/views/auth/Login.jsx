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
        <div className="flex min-h-screen items-center justify-center bg-gray-50 text-primary-navy font-body">
            <div className="fixed top-6 left-6 z-10">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center space-x-2 text-primary-navy hover:text-primary-blue transition-colors font-semibold"
                >
                    <span>←</span>
                    <span>Back to Home</span>
                </button>
            </div>
            <div className="w-full max-w-md p-10 space-y-8 bg-white rounded-2xl shadow-xl border border-neutral-100">
                <div className="text-center">
                    <img
                        src="/logos/VW_Logo.png"
                        alt="VisdomWaves"
                        className="h-16 mx-auto mb-6"
                    />
                    <h2 className="text-3xl font-heading font-bold text-primary-navy">
                        {step === 'mobile' ? 'Client Login' : `Welcome ${mobileUser?.name || 'User'}`}
                    </h2>
                    <p className="text-neutral-500 mt-3 text-lg">
                        {step === 'mobile' ? 'Enter your registered mobile number' :
                            step === 'face-capture' ? 'Face Verification' : 'Choose authentication method'}
                    </p>
                </div>

                {mobileCheckError && (
                    <div className="p-4 text-sm text-red-600 bg-red-50 rounded-xl border border-red-100 flex items-center">
                        <span className="mr-2">⚠️</span> {mobileCheckError}
                    </div>
                )}

                {faceVerificationError && (
                    <div className="p-4 text-sm text-red-600 bg-red-50 rounded-xl border border-red-100 flex items-center">
                        <span className="mr-2">⚠️</span> {faceVerificationError}
                    </div>
                )}

                {step === 'mobile' && (
                    <form onSubmit={handleMobileSubmit} className="space-y-6">
                        <div>
                            <label className="block mb-2 text-sm font-bold text-neutral-700">Mobile Number</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FiSmartphone className="text-primary-blue w-5 h-5" />
                                </div>
                                <input
                                    type="tel"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    className="w-full pl-12 px-4 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue/50 focus:border-primary-blue text-primary-navy placeholder-neutral-400 transition-all font-medium"
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
                            className={`w-full py-4 font-bold text-white bg-primary-blue rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-primary-blue/30 flex items-center justify-center ${mobileCheckLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {mobileCheckLoading ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Verifying...
                                </span>
                            ) : 'Continue'}
                        </button>
                    </form>
                )}

                {step === 'auth-method' && (
                    <div className="space-y-4">
                        <button
                            onClick={() => handleAuthMethodSelect('pin')}
                            className="w-full p-4 flex items-center justify-between bg-white hover:bg-neutral-50 rounded-xl transition-all border border-neutral-200 hover:border-primary-blue group shadow-sm hover:shadow-md"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-primary-blue/10 rounded-full group-hover:bg-primary-blue/20 transition-colors">
                                    <FiLock className="w-6 h-6 text-primary-blue" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-primary-navy">PIN Authentication</h3>
                                    <p className="text-sm text-neutral-500">Enter your security PIN</p>
                                </div>
                            </div>
                            <span className="text-neutral-300 group-hover:text-primary-blue font-bold text-xl">→</span>
                        </button>

                        <button
                            onClick={() => handleAuthMethodSelect('face')}
                            className="w-full p-4 flex items-center justify-between bg-white hover:bg-neutral-50 rounded-xl transition-all border border-neutral-200 hover:border-primary-blue group shadow-sm hover:shadow-md"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-primary-blue/10 rounded-full group-hover:bg-primary-blue/20 transition-colors">
                                    <FiUser className="w-6 h-6 text-primary-blue" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-primary-navy">Face ID</h3>
                                    <p className="text-sm text-neutral-500">Scan your face</p>
                                </div>
                            </div>
                            <span className="text-neutral-300 group-hover:text-primary-blue font-bold text-xl">→</span>
                        </button>

                        <button
                            onClick={() => handleAuthMethodSelect('voice')}
                            className="w-full p-4 flex items-center justify-between bg-white hover:bg-neutral-50 rounded-xl transition-all border border-neutral-200 hover:border-primary-blue group shadow-sm hover:shadow-md"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-primary-blue/10 rounded-full group-hover:bg-primary-blue/20 transition-colors">
                                    <FiMic className="w-6 h-6 text-primary-blue" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-primary-navy">Voice Match</h3>
                                    <p className="text-sm text-neutral-500">Verify with your voice</p>
                                </div>
                            </div>
                            <span className="text-neutral-300 group-hover:text-primary-blue font-bold text-xl">→</span>
                        </button>

                        <button
                            onClick={() => {
                                setStep('mobile')
                                dispatch(resetMobileCheck())
                                setMobile('')
                            }}
                            className="w-full mt-4 text-sm text-neutral-500 hover:text-primary-blue transition-colors font-medium border-t border-neutral-100 pt-4"
                        >
                            Use a different number
                        </button>
                    </div>
                )}

                {step === 'face-capture' && (
                    <div className="space-y-6 text-center">
                        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden border-2 border-primary-blue shadow-inner">
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
                                    className="px-8 py-3 bg-white text-primary-navy border-2 border-neutral-200 font-bold rounded-full hover:bg-neutral-50 hover:border-primary-blue transition-all flex items-center space-x-2"
                                >
                                    <FiCamera className="w-5 h-5" />
                                    <span>Capture</span>
                                </button>
                            ) : (
                                <>
                                    <button
                                        onClick={retakeImage}
                                        className="px-6 py-3 bg-neutral-100 text-neutral-600 font-bold rounded-full hover:bg-neutral-200 transition-colors"
                                    >
                                        Retake
                                    </button>
                                    <button
                                        onClick={submitFaceVerification}
                                        disabled={faceVerificationLoading}
                                        className="px-8 py-3 bg-primary-blue text-white font-bold rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2 shadow-lg hover:shadow-primary-blue/30"
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
                            className="text-sm text-neutral-500 hover:text-primary-blue transition-colors font-medium"
                        >
                            Back to methods
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
