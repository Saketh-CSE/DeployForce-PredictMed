# PredictMed — DeployForce

A responsive React + Vite concept website for Virtusa Jatayu Season 6, Use Case 2: **PredictMed — Agentic AI for Chronic Kidney Disease**.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

A `vercel.json` SPA rewrite is included.

## Website features

- Animated hero, scroll reveals, hover interactions and responsive navigation.
- Solution overview, workflow, technology stack and conceptual architecture.
- Interactive sample dashboard with member selector, trend chart and signal distribution.
- Research section grounded in KDIGO 2024, NIDDK, a 2026 ML scoping review and WHO 2026 AI oversight guidance.
- Proposed data-quality, feature-selection, experiment-orchestration and monitoring agent roles.
- Model-development comparison ideas with validation and explainability considerations.
- Roadmap, intended value, FAQ and clinical-safety notes.

## Important scope notes

- The site describes the Virtusa-provided CKD deterioration use case.
- The dashboard uses **fictional illustrative data** only.
- It is a concept demonstration, not a deployed predictive model, clinical decision-support product, diagnosis or medical advice.
- The Virtusa brief explicitly names discovery/data assessment, Kafka + Airflow ingestion, Apache Iceberg longitudinal timelines, lab trend engineering, Agentic AI workflow, autonomous feature selection and MLflow experiments. Validation and deployment are labelled as proposed next steps.
