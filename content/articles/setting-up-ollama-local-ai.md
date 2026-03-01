---
title: "Setting Up Ollama for Local AI: A Complete Guide"
slug: "setting-up-ollama-local-ai"
date: "2026-02-04"
updated: "2026-02-04"
category: "ai-models"
description: "A step-by-step guide to setting up Ollama for running AI models locally on your machine."
author: "Tom Richards"
tags: ["ollama", "local ai", "llm", "privacy", "self-hosted"]
readTime: 10
featured: false
---

# Setting Up Ollama for Local AI: A Complete Guide

Running AI models locally gives you privacy and no API costs. This guide walks through setting up Ollama.

## What is Ollama?

Ollama runs large language models locally on macOS, Linux, and Windows (via WSL). It bundles models into a simple package.

## Hardware Requirements

| Model | RAM Needed | Disk Space |
|------|------------|------------|
| Llama 3.2 | 16GB | 4GB |
| Code Llama 13B | 32GB | 8GB |
| Mistral 7B | 16GB | 4GB |

For GPU acceleration: Apple Silicon (M1/M2/M3) provides best performance.

## Installation

### macOS

```bash
brew install ollama
```

### Linux

Install using the official installer script from ollama.com.

### Verify Installation

```bash
ollama --version
```

## Getting Started

### Pull Your First Model

```bash
ollama pull llama3.2
ollama pull codellama
ollama list
```

### Running Models

```bash
ollama run llama3.2
ollama run codellama:13b
```

## API Server

```bash
ollama serve
curl http://localhost:11434/api/generate -d {"model": "llama3.2", "prompt": "Hello", "stream": false}
```

## Integration with Coding Tools

### VS Code - Continue Extension

Configure Continue to use Ollama:

```json
{ "models": [{ "title": "Ollama", "provider": "ollama", "model": "llama3.2" }] }
```

### Aider

```bash
aider --model ollama/codellama:13b
```

## Model Selection Guide

### For Coding

- Code Llama: Code completion, 80+ languages
- DeepSeek Coder: Code-specific, 86 languages

### For Reasoning

- Llama 3.2: Balanced, general purpose
- Mistral: Fast, efficient

## Performance Optimization

### Quantization

Pull a quantized model for smaller size:

```bash
ollama pull llama3.2:1b
```

### Memory Management

```bash
export OLLAMA_NUM_PARALLEL=2
```

## Troubleshooting

### Common Issues

1. Out of Memory: Use smaller models or enable quantization
2. Slow Performance: Use GPU acceleration or quantized models
3. Model Not Found: Pull the model first: ollama pull modelname

## Cost Analysis

| Usage Pattern | Ollama Cost | Cloud API Cost |
|---------------|-------------|----------------|
| 1 hour/day | Electricity only | $15-30/month |
| 4 hours/day | Electricity only | $60-120/month |

Break-even is typically 1-2 months of usage.

## Conclusion

Ollama makes local AI accessible. For privacy-conscious work, it is an excellent choice.

## Related Articles

- [Top 10 Free AI Tools Every Developer Should Know](/blog/top-10-free-ai-tools-developers)
- [Best Open Source AI Models for Coding in 2026](/blog/best-open-source-ai-models-coding)
