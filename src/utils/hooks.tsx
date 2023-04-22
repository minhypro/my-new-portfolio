import {useMemo, useState} from 'react'

export const useSpeechRecognition = () => {
	const [transcript, setTranscript] = useState('')
	const [confidence, setConfidence] = useState(0)
	const [isListening, setListening] = useState(false)
	const [isSpeaking, setSpeaking] = useState(false)

	const SpeechRecognition =
		window.SpeechRecognition || window.webkitSpeechRecognition

	const recognition = useMemo(
		() => new SpeechRecognition(),
		[SpeechRecognition],
	)
	recognition.continuous = false
	recognition.interimResults = true
	recognition.lang = 'th-TH'

	recognition.onstart = () => {
		setListening(true)
	}

	recognition.onresult = (event: SpeechRecognitionEvent) => {
		const lastResult = event.results[event.results.length - 1]
		setTranscript(lastResult[0].transcript)
		setConfidence(lastResult[0].confidence)
	}

	recognition.onend = () => {
		setListening(false)
	}

	recognition.onspeechstart = () => {
		setSpeaking(true)
	}

	recognition.onspeechend = () => {
		setSpeaking(false)
	}

	const startRecognition = () => {
		recognition.start()
	}

	const stopRecognition = () => {
		recognition.stop()
	}

	return {
		transcript,
		confidence,
		startRecognition,
		stopRecognition,
		isListening,
		isSpeaking,
	} as const
}
