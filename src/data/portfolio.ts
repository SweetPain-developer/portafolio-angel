export const profile = {
  name: 'Ángel Lillo',
  role: 'Backend Engineer · Node.js · AWS Serverless · Integraciones PRD',
  summary:
    'Ingeniero en Informática especializado en backend con Node.js y arquitectura serverless sobre AWS para proyectos productivos de alta criticidad. Participo en diseño técnico, implementación, soporte productivo e integración con sistemas corporativos como SAP y AS400. Complemento este trabajo con experiencia en Flutter, componentes de datos en AWS y uso práctico de IA aplicada al desarrollo.',
};

export const contacts = {
  linkedin: 'https://cl.linkedin.com/in/angel-lillo-003833369',
  github: 'https://github.com/SweetPain-developer',
  whatsapp: 'https://wa.me/56935246795?countryName=CL&countryCode=56&phoneNumber=935246795',
  emails: ['angel@innobyte.cl', 'Angel.lillo.bustos@gmail.com'],
};

export const highlights = [
  'Resolución de incidentes críticos en producción',
  'Diseño de flujos complejos con AWS Step Functions',
  'Modelamiento avanzado y remediación de inconsistencias en DynamoDB',
  'Integración de sistemas corporativos con SAP y AS400',
  'Uso práctico de IA aplicada al desarrollo para análisis técnico y automatización asistida',
];

export const projects = [
  {
    name: 'COPEC FFAA',
    context: 'Sistema de gestión de información crítica en un entorno productivo de alta exigencia operativa.',
    responsibilities: [
      'Desarrollo backend con Node.js en arquitectura serverless.',
      'Orquestación de procesos con AWS Step Functions.',
      'Implementación de AWS Lambda con manejo de errores y reintentos.',
      'Integración con SAP y AS400 para flujos corporativos.',
      'Resiliencia con SQS + DLQ para desacople y recuperación de fallos.',
      'Modelamiento y corrección de inconsistencias en DynamoDB.',
      'Participación en QA, estimaciones y mejora de calidad de código.',
    ],
    results: [
      'Participación directa en la resolución de incidentes críticos en producción.',
      'Aporte a la confiabilidad y mantenibilidad de flujos backend.',
      'Participación transversal en QA, estimaciones y diseño técnico.',
    ],
    stack: ['Node.js', 'AWS Lambda', 'Step Functions', 'SQS / DLQ', 'DynamoDB', 'SAP', 'AS400', 'SonarQube'],
    links: [
      { label: 'FFAA COPEC', url: 'https://ffaa.copec.cl/#/login' },
    ],
  },
  {
    name: 'RVA (Red Virtual de Alimentos)',
    context: 'Aplicación móvil conectada a APIs para habilitar flujos funcionales de usuario.',
    responsibilities: [
      'Desarrollo móvil con Flutter.',
      'Integración de APIs REST.',
      'Implementación de interfaces y flujos funcionales.',
    ],
    results: [
      'Participación en la construcción funcional de la aplicación móvil.',
      'Experiencia práctica en integración cliente-backend mediante APIs.',
    ],
    stack: ['Flutter', 'Dart', 'REST APIs'],
    links: [
      { label: 'RVA Android', url: 'https://play.google.com/store/apps/details?id=com.Red_Virtual_Alimento&hl=es_CL' },
      { label: 'RVA iOS', url: 'https://apps.apple.com/cl/app/red-de-alimentos/id1497877826' },
    ],
  },
  {
    name: 'Subproyecto Data Warehouse',
    context: 'Implementación de componentes de analítica de datos en AWS para disponibilidad y consulta de información.',
    responsibilities: [
      'Diseño de arquitectura de datos.',
      'ETL con AWS Glue.',
      'Configuración de Crawlers y catálogo.',
      'Consultas analíticas con Athena.',
      'Resolución de problemas de visualización y disponibilidad de datos.',
    ],
    results: [
      'Participación en la habilitación de flujos de datos para análisis.',
      'Apoyo en la disponibilidad y consulta de información en entornos AWS.',
    ],
    stack: ['AWS Glue', 'Athena', 'S3', 'ETL', 'Data Catalog'],
    links: [],
  },
];

export const tech = {
  core: [
    'Node.js',
    'AWS Lambda',
    'AWS Step Functions',
    'Amazon SQS',
    'DynamoDB',
    'Serverless Architecture',
    'Event-Driven Design',
    'SAP',
    'AS400',
  ],
  complementary: [
    'C#',
    'S3',
    'AWS Glue',
    'Athena',
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
  'Integraciones empresariales y operación productiva',
  'Calidad de software y madurez QA',
  'Uso práctico de IA aplicada al desarrollo',
];
