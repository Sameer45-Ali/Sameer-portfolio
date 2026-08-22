export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Multimodal & Vision" | "Deep Learning" | "Full-Stack AI";
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  architectureDetails: string[];
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level?: string; description?: string }[];
}

export interface Certification {
  title: string;
  issuer: string;
  status: "Completed" | "In Progress";
  badgeColor: string;
  year?: string;
  skillsAcquired: string[];
}

export const portfolioData = {
  personal: {
    name: "Sameer Ali",
    title: "Python AI Engineer & ML Developer",
    location: "Hyderabad, Pakistan",
    email: "sameer2659110@gmail.com",
    phone: "0300 3533809",
    github: "https://github.com/Sameer45-Ali",
    linkedin: "http://www.linkedin.com/in/sameer-ali-ai-ml",
    bio: "AI/ML Engineer specializing in Python development, multimodal AI pipelines, and deep learning architectures. Experienced in designing asynchronous processing pipelines for video transcription and keyframe extraction, training convolutional neural networks (CNNs) for medical image classification, and building low-latency conversational AI systems with TensorFlow, Keras, OpenCV, faster-whisper, and spaCy.",
    availability: "Open to Remote, Hybrid, and On-site Python, AI/ML, and Software Engineering opportunities worldwide.",
    stats: [
      { label: "Core AI Projects", value: "3 Flagship" },
      { label: "Deep Learning Stack", value: "TensorFlow & Keras" },
      { label: "Multimodal AI", value: "Vision & Speech" },
      { label: "CS Degree", value: "Sukkur IBA '26" },
    ],
  },

  projects: [
    {
      id: "multimodal-video-pipeline",
      title: "Multimodal Video AI Pipeline",
      tagline: "Speech Transcription, Semantic Topic Segmentation & Keyframe Extraction",
      category: "Multimodal & Vision",
      description:
        "High-performance asynchronous Python pipeline that transforms long-form unstructured video into structured, searchable chaptered formats with synchronized visual keyframes.",
      highlights: [
        "Designed a Python pipeline that converts long-form videos into structured chapters using speech transcription and semantic topic segmentation.",
        "Implemented computer-vision keyframe extraction and concurrent processing to improve efficiency when handling long videos.",
        "Debugged and integrated NLP and computer-vision components while maintaining modular, testable code and minimizing processing bottlenecks.",
      ],
      techStack: ["Python", "faster-whisper", "OpenCV", "Asyncio / Multithreading", "spaCy NLP", "NumPy"],
      githubUrl: "https://github.com/Sameer45-Ali",
      architectureDetails: [
        "Audio extraction & accelerated transcription layer powered by faster-whisper.",
        "Semantic similarity boundary detection using NLP embeddings for topic clustering.",
        "OpenCV frame difference analysis for dynamic keyframe scene detection.",
        "Asynchronous task queue for non-blocking concurrent video processing.",
      ],
      metrics: [
        { label: "Latency", value: "4x Faster with faster-whisper" },
        { label: "Concurrency", value: "Async Multithreading" },
        { label: "Output", value: "Timestamped Chapters & Keyframes" },
      ],
    },
    {
      id: "deep-learning-medical-ai",
      title: "Deep Learning Classification & Medical AI",
      tagline: "Multi-Label Chest X-ray Classification & U-Net L*a*b* Image Colorization",
      category: "Deep Learning",
      description:
        "Applied deep learning project training CNN classifiers on the NIH Chest X-ray14 dataset, alongside U-Net generative architectures for photo-realistic image colorization in L*a*b* color space.",
      highlights: [
        "Trained and evaluated multi-label classifiers on the NIH Chest X-ray14 dataset using MobileNetV2, ResNet50, and EfficientNetB0 architectures.",
        "Implemented U-Net models for image colorization in the L*a*b* color space with perceptual loss metrics.",
        "Benchmarked model performance using evaluation metrics (ROC-AUC, F1) and analyzed errors to identify opportunities for model improvement and bias reduction.",
      ],
      techStack: ["TensorFlow", "Keras", "Python", "MobileNetV2", "ResNet50", "EfficientNetB0", "U-Net", "CNNs"],
      githubUrl: "https://github.com/Sameer45-Ali",
      architectureDetails: [
        "Transfer learning and custom classifier heads on 14 thoracic disease labels.",
        "U-Net architecture with skip connections separating lightness (L) from color channels (a*, b*).",
        "Data augmentation, class imbalance weighting, and ROC-AUC curve benchmarking.",
      ],
      metrics: [
        { label: "Dataset", value: "NIH Chest X-ray14" },
        { label: "Architectures", value: "ResNet50, EfficientNet, U-Net" },
        { label: "Domain", value: "Medical AI & Computer Vision" },
      ],
    },
    {
      id: "websense-ai-voice",
      title: "WebSense-AI Voice Control",
      tagline: "Conversational Browser Extension with Intent Recognition & Low-Latency API",
      category: "Full-Stack AI",
      description:
        "An intelligent voice-controlled web interaction platform utilizing NLP intent recognition and confidence scoring to navigate and execute browser actions through speech.",
      highlights: [
        "Collaborated on a conversational browser-extension project using natural-language understanding, intent recognition, entity extraction, and confidence scoring.",
        "Built asynchronous Flask API endpoints to handle voice-driven requests and support low-latency communication between the AI backend and user interface.",
        "Integrated client-side React frontend with real-time feedback audio status.",
      ],
      techStack: ["React", "Node.js", "Flask", "spaCy NLP", "Python", "REST APIs", "Entity Extraction"],
      githubUrl: "https://github.com/Sameer45-Ali",
      architectureDetails: [
        "spaCy NLP pipeline with customized pattern matcher for browser-specific intent recognition.",
        "Confidence scoring filter preventing erroneous trigger actions.",
        "Asynchronous Flask API server handling simultaneous audio commands with millisecond response.",
      ],
      metrics: [
        { label: "Stack", value: "React + Node.js + Flask" },
        { label: "NLP Engine", value: "spaCy Custom Intent Matcher" },
        { label: "Mode", value: "Real-time Voice Navigation" },
      ],
    },
    {
      id: "nexus-store-ai",
      title: "NexusStore — Modern E-Commerce & GenAI Concierge",
      tagline: "Live Multi-Currency Sync (USD/PKR/EUR/GBP) & Groq LLM Shopping Assistant",
      category: "Full-Stack AI",
      description:
        "Full-featured modern e-commerce web platform featuring real-time multi-currency & country synchronization and an intelligent Generative AI Shopping Concierge powered by Groq LLMs (120B/27B) with dynamic product card rendering.",
      highlights: [
        "Built a dual real-time multi-currency engine supporting USD ($), PKR (Rs), EUR (€), and GBP (£) with persistent locale switching.",
        "Integrated Groq Cloud LLMs (120B/27B) for conversational customer recommendations, product comparisons, and dynamic interactive cart additions.",
        "Engineered complete glassmorphism shopping flow with animated cart drawer, promo voucher calculation, and catalog filtering.",
      ],
      techStack: ["JavaScript", "Groq GenAI", "Meta LLaMA 120B", "Multi-Currency Engine", "CSS Glassmorphism", "REST APIs"],
      githubUrl: "https://github.com/Sameer45-Ali/Ecommerce-frontend-design",
      architectureDetails: [
        "Groq LLM streaming API integration with contextual product catalog injection.",
        "Dynamic JSON response extraction for client-side product card rendering in chat.",
        "Real-time currency converter with localStorage persistence across all pages.",
      ],
      metrics: [
        { label: "GenAI Model", value: "Groq 120B / 27B LLMs" },
        { label: "Currencies", value: "USD, PKR, EUR, GBP" },
        { label: "UI Flow", value: "5 Multi-Page Store" },
      ],
    },
    {
      id: "doc-vlm-qlora",
      title: "DocVLM: 4-Bit Fine-Tuned Vision-Language Model",
      tagline: "QLoRA Parameter-Efficient Fine-Tuning on Qwen2-VL-2B for Structured Document Extraction",
      category: "Multimodal & Vision",
      description:
        "End-to-end multimodal deep learning pipeline that fine-tunes Qwen2-VL-2B via QLoRA (4-bit NF4) for zero-hallucination structured JSON extraction from complex invoices, tabular receipts, and forms.",
      highlights: [
        "Fine-tuned Qwen2-VL-2B cross-attention projection layers with PEFT QLoRA (r=16, alpha=32) while freezing 4-bit base weights (<0.8% trainable parameters).",
        "Achieved 96.8% JSON schema compliance and 94.2% key-value extraction F1 on unseen document test sets.",
        "Built interactive 3-column Studio workspace with live document canvas, entity inspector, and Plotly radar benchmark telemetry.",
      ],
      techStack: ["PyTorch", "PEFT QLoRA", "BitsAndBytes (4-Bit NF4)", "Qwen2-VL-2B", "Transformers", "Streamlit", "Plotly"],
      githubUrl: "https://github.com/Sameer45-Ali/doc-vlm-qlora",
      architectureDetails: [
        "BitsAndBytes NF4 double-quantization reducing VRAM footprint to 1.8 GB.",
        "Custom multimodal conversational dataset pipeline with synthetic invoice generation.",
        "Automated benchmark harness comparing zero-shot Base VLM vs. fine-tuned DocVLM.",
      ],
    {
      id: "image-enhancement-dl",
      title: "AI Image Enhancement & Colorization Studio",
      tagline: "OpenCV DNN Colorization (CIE LAB) & MIRNet-Inspired Low-Light Enhancement",
      category: "Multimodal & Vision",
      description:
        "Dual-pipeline visual restoration web application combining OpenCV DNN (Zhang et al. ECCV 2016 Caffe) for photo-realistic CIE LAB grayscale colorization and MIRNet-inspired low-light contrast & gamma enhancement with a unified Flask inference server.",
      highlights: [
        "Implemented automatic grayscale colorization by extracting CIE LAB L-channel and predicting ab chroma channels via pre-trained Caffe models in OpenCV DNN.",
        "Engineered a lightweight MIRNet-inspired low-light image enhancer combining CLAHE, noise filtering, and gamma correction for real-time CPU deployment.",
        "Built and deployed a unified Flask inference API server and responsive web studio for interactive photo restoration.",
      ],
      techStack: ["Python", "OpenCV DNN", "CIE LAB Color Space", "Flask", "NumPy", "MIRNet", "Pillow"],
      githubUrl: "https://github.com/ShahzebX/Image-Enhancement-DL",
      architectureDetails: [
        "CIE LAB color space separation enabling decoupled luminance processing from chroma prediction.",
        "Zhang et al. ECCV 2016 deep CNN colorization architecture running via OpenCV DNN backend.",
        "Classical multi-scale enhancer delivering deterministic sub-second low-light restoration.",
      ],
      metrics: [
        { label: "Color Space", value: "CIE L*a*b* 224x224" },
        { label: "Engine", value: "OpenCV DNN Caffe" },
        { label: "Latency", value: "Real-time CPU Inference" },
      ],
    },
  ] as Project[],

  skills: [
    {
      title: "AI, Deep Learning & Vision",
      icon: "Brain",
      skills: [
        { name: "Deep Learning Architectures", level: "Advanced", description: "CNNs, MobileNetV2, ResNet50, EfficientNet, U-Net" },
        { name: "Computer Vision & Video Processing", level: "Advanced", description: "OpenCV, keyframe extraction, L*a*b* color spaces" },
        { name: "Speech AI & Audio Pipelines", level: "Advanced", description: "faster-whisper, audio segmentation, transcription" },
        { name: "NLP & Intent Recognition", level: "Advanced", description: "spaCy token pipelines, entity extraction, confidence scoring" },
        { name: "Prompt Engineering & GenAI", level: "Proficient", description: "Google Prompting Essentials, Chain-of-Thought, System Prompts" },
      ],
    },
    {
      title: "Backend, APIs & Cloud Systems",
      icon: "Cpu",
      skills: [
        { name: "FastAPI", level: "Advanced", description: "High-performance async REST APIs, Pydantic data validation" },
        { name: "Flask", level: "Advanced", description: "Lightweight microservices & AI inference endpoints" },
        { name: "Docker", level: "Advanced", description: "Containerization of ML pipelines & reproducible environments" },
        { name: "Asynchronous Programming", level: "Advanced", description: "asyncio, multithreading, concurrent queues, background workers" },
        { name: "REST APIs & WebSockets", level: "Advanced", description: "Low-latency bidirectional AI communication" },
      ],
    },
    {
      title: "Programming & Software Engineering",
      icon: "Code",
      skills: [
        { name: "Python", level: "Expert", description: "Production pipelines, async, OOP, typing, NumPy" },
        { name: "JavaScript / TypeScript", level: "Proficient", description: "Modern React, Node.js, Next.js" },
        { name: "Unit & Integration Testing", level: "Advanced", description: "pytest, test-driven validation, CI/CD" },
        { name: "Debugging & Code Refactoring", level: "Advanced", description: "Profiling, memory optimization, modular design" },
        { name: "Git & GitHub", level: "Advanced", description: "Branching strategies, collaborative workflows" },
      ],
    },
    {
      title: "Frameworks, Libraries & Tools",
      icon: "Layers",
      skills: [
        { name: "TensorFlow & Keras", level: "Advanced", description: "CNN classifiers, U-Net models, transfer learning" },
        { name: "OpenCV", level: "Advanced", description: "Keyframe extraction, frame diffing, image processing" },
        { name: "spaCy NLP", level: "Advanced", description: "Custom entity extraction, rule-based matching" },
        { name: "faster-whisper", level: "Advanced", description: "Accelerated speech-to-text inference" },
        { name: "Streamlit", level: "Advanced", description: "Rapid AI demo prototyping and dashboarding" },
      ],
    },
  ] as SkillCategory[],

  certifications: [
    {
      title: "Google Prompting Essentials",
      issuer: "Google",
      status: "Completed",
      badgeColor: "from-blue-500 to-cyan-400",
      skillsAcquired: ["Prompt Design", "In-context Learning", "Evaluation Principles"],
    },
    {
      title: "Python 3 Programming Specialization",
      issuer: "University of Michigan / Coursera",
      status: "Completed",
      badgeColor: "from-yellow-500 to-emerald-400",
      skillsAcquired: ["Advanced Data Structures", "APIs & Web Scraping", "Pillow & OCR"],
    },
    {
      title: "Google AI Essentials",
      issuer: "Google",
      status: "Completed",
      badgeColor: "from-red-500 to-amber-400",
      skillsAcquired: ["GenAI Foundations", "Responsible AI Practices", "Workflow Optimization"],
    },
    {
      title: "DeepLearning.AI Machine Learning",
      issuer: "DeepLearning.AI / Andrew Ng",
      status: "In Progress",
      badgeColor: "from-purple-500 to-indigo-400",
      skillsAcquired: ["Supervised & Unsupervised Learning", "Neural Networks", "Regularization"],
    },
    {
      title: "IBM AI Engineering",
      issuer: "IBM",
      status: "In Progress",
      badgeColor: "from-blue-600 to-violet-500",
      skillsAcquired: ["Deep Learning & Keras", "PyTorch & Transformers", "Enterprise ML Pipelines"],
    },
  ] as Certification[],

  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "Sukkur IBA University",
    location: "Pakistan",
    period: "Graduating 2026",
    details:
      "Core focus on Algorithms, Artificial Intelligence, Data Structures, Operating Systems, Computer Vision, and Distributed Computing.",
  },

  interactiveTerminalScenarios: [
    {
      id: "video-pipeline",
      name: "Run Multimodal Video & Keyframe Pipeline",
      command: "python multimodal_pipeline.py --input sample_lecture.mp4 --transcribe --extract-keyframes",
      output: `[INFO] Initializing Multimodal AI Pipeline...
[WHISPER] Loading faster-whisper model (GPU accelerated)...
[TRANSCRIPTION] Transcribed 42:15 audio in 4.12s (10.2x realtime)
[NLP SEGMENTATION] Generating semantic topic clusters via spaCy embeddings...
  ✓ Chapter 01 (00:00 - 12:30): Introduction to Deep CNN Architectures
  ✓ Chapter 02 (12:31 - 28:45): Feature Maps & Skip Connections in U-Net
  ✓ Chapter 03 (28:46 - 42:15): Evaluation Metrics & ROC-AUC Analysis
[OPENCV] Processing keyframes via dynamic frame-difference threshold...
  ✓ Extracted 18 distinct high-information keyframe slides.
[STATUS] Execution Completed in 6.8s | Output: structured_chapters.json + /keyframes/`,
    },
    {
      id: "medical-ai",
      name: "Evaluate Medical Chest X-ray Classifier",
      command: "python evaluate_medical_model.py --dataset NIH_Chest_Xray14 --arch ResNet50 --weights best_weights.h5",
      output: `[INFO] Loading NIH Chest X-ray14 Validation Set (14 multi-label classes)...
[MODEL] Initializing ResNet50 backbone with custom classification head...
------------------------------------------------------------
Model Evaluation Metrics (14 Thoracic Conditions):
  ✓ Cardiomegaly:     ROC-AUC: 0.912 | F1: 0.84
  ✓ Pneumonia:        ROC-AUC: 0.884 | F1: 0.79
  ✓ Infiltration:     ROC-AUC: 0.862 | F1: 0.76
  ✓ Atelectasis:      ROC-AUC: 0.871 | F1: 0.81
  ✓ Effusion:         ROC-AUC: 0.905 | F1: 0.83
------------------------------------------------------------
[RESULT] Mean ROC-AUC Score: 0.887 | Loss: 0.142 (Binary Cross-Entropy)
[INFERENCE SPEED] 18.4ms per X-ray slice on GPU`,
    },
    {
      id: "nlp-voice",
      name: "Run spaCy Intent & Entity Matcher",
      command: "python -c \"import websense_nlp; print(websense_nlp.parse('Navigate to medical reports and highlight cardiomegaly findings'))\"",
      output: `{
  "input_text": "Navigate to medical reports and highlight cardiomegaly findings",
  "intent": "NAVIGATE_AND_HIGHLIGHT",
  "confidence_score": 0.988,
  "entities": [
    { "text": "medical reports", "label": "NAVIGATION_TARGET", "start": 12, "end": 27 },
    { "text": "cardiomegaly findings", "label": "SEARCH_TERM", "start": 42, "end": 63 }
  ],
  "routing_target": "WebSenseVoiceService",
  "status": "DISPATCH_READY"
}`,
    },
    {
      id: "ask-ai",
      name: "Query Sameer's AI Profile",
      command: "ai query --profile sameer-ali --question 'What are Sameer\\'s top engineering strengths?'",
      output: `[PROFILE INSIGHTS FOR SAMEER ALI]:
1. Multimodal AI Pipelines: Expert in joining speech transcription (faster-whisper) with computer vision (OpenCV) and NLP.
2. Deep Learning & CNNs: Practical hands-on experience training classifiers on NIH Chest X-ray14 and building U-Net image models with TensorFlow/Keras.
3. Asynchronous Python Engineering: Highly skilled in asyncio, multithreading, modular test-driven development (pytest), and Flask APIs.
4. Computer Science Foundation: BS in Computer Science from Sukkur IBA University (2026).
5. Availability: Ready for Remote, Hybrid, or On-site Python & AI/ML opportunities.`,
    },
  ],
};
