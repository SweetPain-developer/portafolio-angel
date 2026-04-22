export const profile = {
  name: 'Ángel Lillo',
  role: 'Backend Engineer · Arquitectura Serverless en AWS · Cloud & Data',
  summary:
    'Ingeniero en Informática especializado en backend y arquitecturas serverless sobre AWS para sistemas críticos. Combino diseño técnico, implementación y operación productiva para construir soluciones resilientes, escalables y mantenibles, incorporando aprendizaje continuo en IA aplicada al desarrollo.',
};

export const contacts = {
  linkedin: 'https://cl.linkedin.com/in/angel-lillo-003833369',
  github: 'https://github.com/SweetPain-developer',
  emails: ['angel@innobyte.cl', 'Angel.lillo.bustos@gmail.com'],
};

export const highlights = [
  'Resolución de incidentes críticos en producción',
  'Diseño de flujos complejos con AWS Step Functions',
  'Modelamiento avanzado y remediación de inconsistencias en DynamoDB',
  'Integración de sistemas corporativos con SAP y AS400',
  'Aprendizaje continuo en IA aplicada al desarrollo y automatización técnica',
];

export const projects = [
  {
    name: 'COPEC FFAA',
    context: 'Sistema de alta escala para gestión de información crítica.',
    responsibilities: [
      'Backend con Node.js en arquitectura serverless.',
      'Orquestación de procesos con AWS Step Functions.',
      'Implementación de AWS Lambda con manejo robusto de errores y reintentos.',
      'Integración con SAP (eventos, batch, RFC/IDoc/API) y AS400.',
      'Resiliencia con SQS + DLQ.',
      'Modelamiento y corrección de inconsistencias en DynamoDB.',
    ],
    results: [
      'Resolución de incidentes productivos críticos.',
      'Mejora de calidad de código con SonarQube.',
      'Participación transversal en QA, estimaciones y diseño técnico.',
    ],
    stack: ['Node.js', 'AWS Lambda', 'Step Functions', 'SQS / DLQ', 'DynamoDB', 'SAP', 'AS400', 'SonarQube'],
    links: [
      { label: 'FFAA COPEC', url: 'https://ffaa.copec.cl/#/login' },
    ],
  },
  {
    name: 'RVA (Red Virtual de Alimentos)',
    context: 'Aplicación móvil y consumo de APIs.',
    responsibilities: [
      'Desarrollo móvil con Flutter.',
      'Integración de APIs REST.',
      'Implementación de interfaces y flujos funcionales.',
    ],
    results: [],
    stack: ['Flutter', 'Dart', 'REST APIs'],
    links: [
      { label: 'RVA Android', url: 'https://play.google.com/store/apps/details?id=com.Red_Virtual_Alimento&hl=es_CL' },
      { label: 'RVA iOS', url: 'https://apps.apple.com/cl/app/red-de-alimentos/id1497877826' },
    ],
  },
  {
    name: 'Subproyecto Data Warehouse',
    context: 'Diseño e implementación de componentes de analítica de datos en AWS.',
    responsibilities: [
      'Diseño de arquitectura de datos.',
      'ETL con AWS Glue.',
      'Configuración de Crawlers y catálogo.',
      'Consultas analíticas con Athena.',
      'Resolución de problemas de visualización y disponibilidad de datos.',
    ],
    results: [],
    stack: ['AWS Glue', 'Athena', 'S3', 'ETL', 'Data Catalog'],
    links: [],
  },
];

export const tech = {
  core: [
    'Node.js',
    'C#',
    'AWS Lambda',
    'AWS Step Functions',
    'Amazon SQS',
    'DynamoDB',
    'S3',
    'Serverless Architecture',
    'Event-Driven Design',
    'AWS Glue',
    'Athena',
  ],
  complementary: [
    'PostgreSQL',
    'Oracle (SQL / PL-SQL)',
    'Angular',
    'Flutter',
    'Django',
    'Docker',
    'Git',
    'Linux / Zsh',
    'SonarQube',
    'IA aplicada al desarrollo',
    'Prompting técnico',
    'Automatización asistida con IA',
  ],
};

export const focus = [
  'Arquitectura de software escalable',
  'Sistemas distribuidos',
  'Serverless avanzado en AWS',
  'Ingeniería de datos',
  'Calidad de software y madurez QA',
  'Aprendizaje y adopción práctica de IA para desarrollo',
];
