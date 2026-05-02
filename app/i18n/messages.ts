export type Language = 'en' | 'es';

export const defaultLanguage: Language = 'en';

const en = {
  NAV_HOME: 'Home',
  NAV_ABOUT: 'About',
  NAV_SERVICES: 'Services',
  NAV_OPEN_MENU: 'Open menu',
  NAV_CLOSE_MENU: 'Close menu',
  NAV_MAIN_MENU: 'Main navigation',
  LANG_OPTION_ENGLISH: 'English',
  LANG_OPTION_SPANISH: 'Spanish',
  LANG_MENU_ARIA: 'Language',
  LANG_MENU_HEADING: 'Choose language',

  HERO_TITLE_1: 'San Antonio Repair &',
  HERO_TITLE_2: 'Storm Restoration',
  HERO_SUBTEXT:
    'Home damage can feel overwhelming, but you do not have to handle it alone. PCG Contractors helps Texas homeowners repair, restore, and protect their homes with reliable roofing, exterior repairs, interior repairs, storm damage restoration, and insurance claim support.',
  CTA_CALL: 'Book a Free Home Inspection',
  HERO_VIDEO_ARIA:
    'PCG Contractors team discussing a home repair project with a Texas homeowner',

  PROCESS_TITLE: 'Our Simple Home Repair Process',
  PROCESS_SUBTITLE:
    'At PCG Contractors, we make home repairs easier from the first inspection to the final walkthrough. Whether your property needs roofing, exterior repairs, interior work, or storm damage restoration, our team documents the damage, explains your options, and manages the repair process with clear communication.',
  PROCESS_S1_TITLE: 'Free Home Inspection',
  PROCESS_S1_ALT:
    'Contractor inspecting roof and exterior storm damage at a San Antonio home',
  PROCESS_S1_DESC:
    'We inspect the affected areas, document visible damage, and provide a clear report with photos and next steps.',
  PROCESS_S2_TITLE: 'Estimate, Insurance Support & Approval',
  PROCESS_S2_ALT:
    'PCG Contractors specialist reviewing home repair estimate and insurance documents with homeowner',
  PROCESS_S2_DESC:
    'If insurance is involved, we help document the damage and guide you through the claim process. You receive a transparent repair plan before work begins.',
  PROCESS_S3_TITLE: 'Professional Home Repair & Restoration',
  PROCESS_S3_ALT:
    'Home repair crew completing interior and exterior restoration work on a Texas property',
  PROCESS_S3_DESC:
    'Our crew completes the approved work safely, efficiently, and with quality workmanship you can trust.',
  BTN_BOOK_APPOINTMENT: 'Book a Free Home Inspection',

  SVC_HEAD_TITLE: 'Home Repair & Restoration Services in San Antonio',
  SVC_HEAD_DESC:
    'With over 15 years of hands-on experience, PCG Contractors helps homeowners protect, repair, and restore their properties after everyday wear, storm damage, leaks, and unexpected repairs. From roofing to full home repair projects, our team brings dependable workmanship, clear communication, and professional project management to every job.',
  SVC_GRID_TITLE: 'Whole-Home Repair Solutions Tailored to Your Needs',
  SVC_ALT_BADGE: 'Badge showing over 15 years of contractor experience',
  SVC_IMG_ALT:
    'PCG Contractors team discussing a San Antonio home repair and restoration plan with homeowner',
  SVC_ITEM_1: 'Roof Repairs',
  SVC_ITEM_2: 'Roofing & Exterior Restoration',
  SVC_ITEM_3: 'Insurance Claim Assistance',
  SVC_ITEM_4: 'Exterior Home Repairs',
  SVC_ITEM_5: 'Interior Home Repairs',
  SVC_ITEM_6: 'Professional Home Remodeling',
  SVC_ITEM_1_ALT:
    'Contractor examining roof damage during a home repair inspection in San Antonio',
  SVC_ITEM_2_ALT:
    'Roofing and exterior restoration work underway on a Texas home',
  SVC_ITEM_3_ALT:
    'Homeowner meeting with contractor to review insurance claim support for repairs',
  SVC_ITEM_4_ALT:
    'Exterior home repair project with siding and trim restoration in San Antonio',
  SVC_ITEM_5_ALT:
    'Interior repair work after water damage inside a Texas home',
  SVC_ITEM_6_ALT:
    'Contractors performing emergency storm damage repairs to protect a home',
  SVC_DETAIL_1_TITLE: 'Storm Damage Restoration',
  SVC_DETAIL_1_BODY:
    'Texas storms can damage roofing, siding, gutters, and interior finishes in one event. Our San Antonio team documents visible and hidden issues, then builds a practical repair plan based on your home and timeline. We keep communication clear so you know what to expect at each step.',
  SVC_DETAIL_2_TITLE: 'Interior Home Repairs',
  SVC_DETAIL_2_BODY:
    'Water intrusion and storm-related damage often affect ceilings, drywall, paint, flooring, and trim. We complete interior repairs with a focus on clean workmanship and safe, livable spaces for your family. Every scope is explained in plain language before work starts.',
  SVC_DETAIL_3_TITLE: 'Exterior Home Repairs',
  SVC_DETAIL_3_BODY:
    'Exterior damage can leave your home exposed to future moisture and structural issues. PCG Contractors handles siding, fascia, soffit, gutter, and related exterior repairs for homeowners across San Antonio and nearby Texas communities. We prioritize durable materials and details that protect long-term performance.',
  SVC_DETAIL_4_TITLE: 'Insurance Claim Support',
  SVC_DETAIL_4_BODY:
    'If your repairs involve insurance, we help organize photo documentation, scope details, and repair notes for your claim process. Our role is to help you understand repair requirements and communicate clearly with all parties. Final coverage and payment decisions remain with your carrier and policy terms.',
  SVC_DETAIL_5_TITLE: 'Free Home Inspection',
  SVC_DETAIL_5_BODY:
    'A free home inspection gives you a clear starting point before committing to repairs. We assess current damage, flag priority items, and provide straightforward next-step recommendations. It is a practical way for Texas homeowners to make informed decisions with confidence.',
  SVC_DETAIL_CTA: 'Book a Free Home Inspection',

  STAT_1_T: 'Insurance',
  STAT_1_S: 'Repair',
  STAT_1_D: 'Support',
  STAT_2_T: 'Fast',
  STAT_2_S: 'Project',
  STAT_2_D: 'Turnaround',
  STAT_3_T: '15+ Years',
  STAT_3_S: 'of',
  STAT_3_D: 'Experience',
  STAT_4_T: 'Thousands',
  STAT_4_S: 'of Homes',
  STAT_4_D: 'Restored',

  TST_TITLE: 'What San Antonio Homeowners Say',
  TST_SUBTITLE:
    'Texas homeowners share their experience working with PCG Contractors on repairs and restoration.',
  TST_1_QUOTE:
    'PCG Contractors helped us after storm damage and made the entire repair process simple. They documented everything clearly and finished the work fast.',
  TST_1_NAME: 'Maria G.',
  TST_1_LOC: 'Homeowner, San Antonio',
  TST_1_ALT: 'Portrait of San Antonio homeowner after completing home repair project',
  TST_2_QUOTE:
    'They explained our options, helped with the insurance process, and handled the repairs professionally from start to finish.',
  TST_2_NAME: 'Ken R.',
  TST_2_LOC: 'Homeowner, San Antonio',
  TST_2_ALT: 'Portrait of homeowner sharing storm damage restoration experience',
  TST_3_QUOTE:
    'PCG Contractors made the process stress-free. The team was clear, responsive, and easy to work with.',
  TST_3_NAME: 'John D.',
  TST_3_LOC: 'Business Owner, Local',
  TST_3_ALT: 'Portrait of local property owner who received interior and exterior repairs',

  FAQ_TITLE: 'PCG Contractors FAQs',
  FAQ_INTRO:
    'Here are answers to common questions about home repairs, storm damage restoration, and insurance-supported repair projects.',
  FAQ_Q1: 'Do you offer free home inspections?',
  FAQ_A1:
    'Yes. PCG Contractors offers free home inspections in San Antonio and nearby Texas communities. During the visit, we review visible damage, discuss your concerns, and explain practical next steps for repair.',
  FAQ_Q2: 'Do you help with storm damage repairs?',
  FAQ_A2:
    'Yes. We handle storm damage restoration for roofing, exterior areas, and interior spaces affected by wind, hail, or water intrusion. Our team documents the damage and builds a clear repair plan tailored to your property.',
  FAQ_Q3: 'Do you help with insurance claims?',
  FAQ_A3:
    'Yes. We can support your insurance claim process by organizing repair documentation, photos, and scope details. Final coverage decisions are made by your insurance carrier based on your policy terms.',
  FAQ_Q4: 'What areas do you serve?',
  FAQ_A4:
    'PCG Contractors serves homeowners in San Antonio and surrounding Texas areas. Contact us to confirm service availability for your address and project timeline.',
  FAQ_Q5: 'Do you handle interior and exterior repairs?',
  FAQ_A5:
    'Yes. We provide both interior and exterior home repairs, including work related to storm damage and general restoration needs. We coordinate the scope so repairs are completed in a logical and efficient order.',
  FAQ_CTA_TITLE: 'Still have questions?',
  FAQ_CTA_SUBTITLE: "We're here to help you.",
  FAQ_CONTACT_BTN: 'Contact Us',

  CTA_BAND_TITLE: 'Book Your Free Home Inspection',
  CTA_BAND_SUB:
    'Whether you need roofing, storm damage restoration, exterior repairs, interior repairs, or help understanding an insurance repair project, PCG Contractors is ready to help.',
  CTA_BAND_BTN: 'Book Your Free Home Inspection',

  CONTACT_TITLE: 'Contact PCG Contractors',
  CONTACT_SUBTITLE:
    'Have questions about home repairs, storm damage, roofing, exterior repairs, interior repairs, or an insurance-supported project? Send us a message and our team will get back to you quickly.',
  CONTACT_FULL_NAME: 'Full Name',
  CONTACT_EMAIL: 'Email Address',
  CONTACT_PHONE: 'Phone Number',
  CONTACT_SUBJECT: 'Subject',
  CONTACT_MESSAGE: 'Message',
  CONTACT_FULL_NAME_PH: 'Your full name',
  CONTACT_EMAIL_PH: 'you@example.com',
  CONTACT_PHONE_PH: '(210) 000-0000',
  CONTACT_SUBJECT_PH: 'How can we help?',
  CONTACT_MESSAGE_PH: 'Tell us about your home restoration needs...',
  CONTACT_SUBMIT: 'Send Message',
  CONTACT_SUBMITTING: 'Sending...',
  CONTACT_REQUIRED_ERROR: 'Please fill in Full Name, Email Address, and Message.',
  CONTACT_EMAIL_ERROR: 'Please enter a valid email address.',
  CONTACT_SEND_ERROR: 'Unable to send your message right now. Please try again shortly.',
  CONTACT_SUCCESS: 'Thanks! Your message has been sent. Our team will contact you soon.',

  FT_NEWS_DESC:
    'Subscribe for home repair tips, storm damage guidance, maintenance reminders, and updates from PCG Contractors.',
  FT_EMAIL_PH: 'Your Email Here',
  FT_JOIN: 'Join',
  FT_DISCLAIMER:
    'By subscribing, you consent to receive updates and agree to our Privacy Policy.',
  FT_QUICK: 'Quick Links',
  FT_CONNECT: 'Connect With Us',
  FT_STAY: 'Stay Updated',
  FT_LINK_HOME: 'Home Page',
  FT_LINK_ABOUT: 'About Us',
  FT_LINK_BLOGS: 'Blogs',
  FT_LINK_CONTACT: 'Contact Us',
  FT_LINK_SVC: 'Services',
  FT_LINK_TST: 'Testimonials',
  FT_SO_FB: 'Facebook Page',
  FT_SO_IG: 'Instagram Feed',
  FT_SO_TW: 'Twitter Profile',
  FT_SO_LI: 'LinkedIn Page',
  FT_SO_YT: 'YouTube Channel',
  FT_SO_NAME_FB: 'Facebook',
  FT_SO_NAME_IG: 'Instagram',
  FT_SO_NAME_TW: 'Twitter',
  FT_SO_NAME_LI: 'LinkedIn',
  FT_SO_NAME_YT: 'YouTube',
  FT_COPYRIGHT: '© 2026 PCG Contractors. All rights reserved.',
  FT_PRIVACY: 'Privacy Policy',
  FT_TERMS: 'Terms and Conditions',
  FT_COOKIES: 'Cookie Settings',

  'notFound.title': 'Page Not Found',
  'notFound.message': "The page you are looking for doesn't exist or has been moved.",
  'notFound.button': 'Back to Home',
} as const;

const es: Record<keyof typeof en, string> = {
  NAV_HOME: 'Inicio',
  NAV_ABOUT: 'Sobre nosotros',
  NAV_SERVICES: 'Servicios',
  NAV_OPEN_MENU: 'Abrir menú',
  NAV_CLOSE_MENU: 'Cerrar menú',
  NAV_MAIN_MENU: 'Navegación principal',
  LANG_OPTION_ENGLISH: 'Inglés',
  LANG_OPTION_SPANISH: 'Español',
  LANG_MENU_ARIA: 'Idioma',
  LANG_MENU_HEADING: 'Elegir idioma',

  HERO_TITLE_1: 'Restaure su hogar',
  HERO_TITLE_2: 'Restaure su tranquilidad',
  HERO_SUBTEXT:
    'Los daños en el hogar pueden resultar abrumadores, pero no tiene que enfrentarlos solo. PCG Contractors ayuda a los propietarios en Texas a reparar, restaurar y proteger sus viviendas con techado confiable, reparaciones exteriores e interiores, restauración por daños de tormenta y apoyo con reclamos de seguro.',
  CTA_CALL: 'Reserve una inspección gratuita del hogar',
  HERO_VIDEO_ARIA:
    'Equipo de PCG Contractors hablando de un proyecto de reparación del hogar con un propietario en Texas',

  PROCESS_TITLE: 'Nuestro proceso simple de reparación del hogar',
  PROCESS_SUBTITLE:
    'En PCG Contractors facilitamos las reparaciones del hogar desde la primera inspección hasta la entrega final. Ya sea que su propiedad necesite techado, reparaciones exteriores o interiores, o restauración por daños de tormenta, nuestro equipo documenta el daño, explica las opciones y gestiona el proceso con comunicación clara.',
  PROCESS_S1_TITLE: 'Inspección gratuita del hogar',
  PROCESS_S1_ALT:
    'Contratista inspeccionando techo y daños exteriores por tormenta en una casa de San Antonio',
  PROCESS_S1_DESC:
    'Inspeccionamos las zonas afectadas, documentamos el daño visible y entregamos un informe claro con fotos y próximos pasos.',
  PROCESS_S2_TITLE: 'Presupuesto, apoyo con seguros y aprobación',
  PROCESS_S2_ALT:
    'Especialista de PCG Contractors revisando presupuesto y documentos de seguro con propietario',
  PROCESS_S2_DESC:
    'Si interviene el seguro, ayudamos a documentar el daño y a orientarle en el reclamo. Recibe un plan de reparación transparente antes de que comience el trabajo.',
  PROCESS_S3_TITLE: 'Reparación y restauración profesional del hogar',
  PROCESS_S3_ALT:
    'Cuadrilla de reparación trabajando en restauración interior y exterior de una propiedad en Texas',
  PROCESS_S3_DESC:
    'Nuestra cuadrilla completa el trabajo aprobado de forma segura, eficiente y con la calidad que usted merece.',
  BTN_BOOK_APPOINTMENT: 'Reserve una inspección gratuita del hogar',

  SVC_HEAD_TITLE: 'Servicios de reparación y restauración del hogar en San Antonio',
  SVC_HEAD_DESC:
    'Con más de 15 años de experiencia práctica, PCG Contractors ayuda a los propietarios a proteger, reparar y restaurar sus propiedades tras el desgaste diario, daños por tormenta, filtraciones e imprevistos. Desde techado hasta proyectos integrales de reparación, aportamos mano de obra confiable, comunicación clara y gestión profesional en cada trabajo.',
  SVC_GRID_TITLE:
    'Soluciones de reparación integral del hogar adaptadas a sus necesidades',
  SVC_ALT_BADGE: 'Insignia que muestra más de 15 años de experiencia como contratistas',
  SVC_IMG_ALT:
    'Equipo de PCG Contractors conversando con propietario sobre plan de reparación y restauración en San Antonio',
  SVC_ITEM_1: 'Reparaciones de techo',
  SVC_ITEM_2: 'Techado y restauración exterior',
  SVC_ITEM_3: 'Asistencia con reclamos de seguro',
  SVC_ITEM_4: 'Reparaciones exteriores del hogar',
  SVC_ITEM_5: 'Reparaciones interiores del hogar',
  SVC_ITEM_6: 'Reparaciones de emergencia por tormenta',
  SVC_ITEM_1_ALT:
    'Contratista evaluando daños de techo durante inspección de reparación en San Antonio',
  SVC_ITEM_2_ALT:
    'Trabajo de techado y restauración exterior en una vivienda de Texas',
  SVC_ITEM_3_ALT:
    'Propietario y contratista revisando apoyo para reclamo de seguro de reparación',
  SVC_ITEM_4_ALT:
    'Proyecto de reparación exterior con restauración de revestimiento y molduras en San Antonio',
  SVC_ITEM_5_ALT:
    'Trabajos de reparación interior después de daño por agua dentro de una casa en Texas',
  SVC_ITEM_6_ALT:
    'Contratistas realizando reparaciones de emergencia por tormenta para proteger una vivienda',
  SVC_DETAIL_1_TITLE: 'Restauración por daños de tormenta',
  SVC_DETAIL_1_BODY:
    'Las tormentas en Texas pueden dañar techo, revestimiento, canaletas y acabados interiores en un solo evento. Nuestro equipo en San Antonio documenta daños visibles y ocultos, y luego prepara un plan de reparación práctico según su vivienda y tiempos. Mantenemos una comunicación clara en cada etapa.',
  SVC_DETAIL_2_TITLE: 'Reparaciones interiores del hogar',
  SVC_DETAIL_2_BODY:
    'Las filtraciones y los daños por tormenta suelen afectar techos interiores, paneles de yeso, pintura, pisos y molduras. Realizamos reparaciones interiores con mano de obra limpia y espacios seguros para su familia. Explicamos el alcance en lenguaje sencillo antes de comenzar.',
  SVC_DETAIL_3_TITLE: 'Reparaciones exteriores del hogar',
  SVC_DETAIL_3_BODY:
    'El daño exterior puede dejar su hogar expuesto a humedad y problemas estructurales futuros. PCG Contractors realiza reparaciones de revestimiento, fascia, sofito, canaletas y otros elementos exteriores para propietarios en San Antonio y comunidades cercanas de Texas. Priorizamos materiales duraderos y detalles de protección.',
  SVC_DETAIL_4_TITLE: 'Apoyo con reclamos de seguro',
  SVC_DETAIL_4_BODY:
    'Si sus reparaciones incluyen seguro, le ayudamos a organizar fotos, detalles del alcance y notas técnicas para su reclamo. Nuestro papel es ayudarle a entender las necesidades de reparación y comunicar todo con claridad. La cobertura y los pagos finales dependen de su aseguradora y póliza.',
  SVC_DETAIL_5_TITLE: 'Inspección gratuita del hogar',
  SVC_DETAIL_5_BODY:
    'Una inspección gratuita del hogar le da un punto de partida claro antes de decidir reparaciones. Evaluamos el daño actual, señalamos prioridades y compartimos recomendaciones concretas de siguientes pasos. Es una forma práctica para propietarios en Texas de tomar decisiones con confianza.',
  SVC_DETAIL_CTA: 'Reserve una inspección gratuita del hogar',

  STAT_1_T: 'Seguros',
  STAT_1_S: 'Reparación',
  STAT_1_D: 'Apoyo',
  STAT_2_T: 'Plazo',
  STAT_2_S: 'de proyecto',
  STAT_2_D: 'rápido',
  STAT_3_T: 'Más de 15 años',
  STAT_3_S: 'de',
  STAT_3_D: 'experiencia',
  STAT_4_T: 'Miles',
  STAT_4_S: 'de hogares',
  STAT_4_D: 'restaurados',

  TST_TITLE: 'Lo que dicen los propietarios en San Antonio',
  TST_SUBTITLE:
    'Propietarios en Texas comparten su experiencia con PCG Contractors en reparaciones y restauración.',
  TST_1_QUOTE:
    'PCG Contractors nos ayudó tras daños por tormenta y simplificó todo el proceso de reparación. Documentaron todo con claridad y terminaron rápido.',
  TST_1_NAME: 'María G.',
  TST_1_LOC: 'Propietaria, San Antonio',
  TST_1_ALT:
    'Retrato de propietaria de San Antonio tras completar proyecto de reparación del hogar',
  TST_2_QUOTE:
    'Explicaron nuestras opciones, ayudaron con el seguro y llevaron las reparaciones de principio a fin con profesionalidad.',
  TST_2_NAME: 'Ken R.',
  TST_2_LOC: 'Propietario, San Antonio',
  TST_2_ALT: 'Retrato de propietario compartiendo su experiencia de restauración por tormenta',
  TST_3_QUOTE:
    'PCG Contractors hizo el proceso sin estrés. El equipo fue claro, respondió rápido y fue fácil trabajar con ellos.',
  TST_3_NAME: 'Juan D.',
  TST_3_LOC: 'Dueño de negocio, local',
  TST_3_ALT:
    'Retrato de propietario local que recibió reparaciones interiores y exteriores',

  FAQ_TITLE: 'Preguntas frecuentes de PCG Contractors',
  FAQ_INTRO:
    'Respuestas a preguntas habituales sobre reparaciones del hogar, restauración por daños de tormenta y proyectos con apoyo del seguro.',
  FAQ_Q1: '¿Ofrecen inspecciones gratuitas del hogar?',
  FAQ_A1:
    'Sí. PCG Contractors ofrece inspecciones gratuitas del hogar en San Antonio y comunidades cercanas de Texas. Durante la visita revisamos daños visibles, escuchamos sus inquietudes y explicamos los siguientes pasos de reparación.',
  FAQ_Q2: '¿Ayudan con reparaciones por daños de tormenta?',
  FAQ_A2:
    'Sí. Realizamos restauración por daños de tormenta en techo, exterior e interior cuando hay afectaciones por viento, granizo o filtraciones. Nuestro equipo documenta el daño y prepara un plan de reparación claro para su propiedad.',
  FAQ_Q3: '¿Ayudan con reclamos de seguro?',
  FAQ_A3:
    'Sí. Podemos apoyar su proceso de reclamo con documentación de reparación, fotos y detalles del alcance. La cobertura final siempre depende de su aseguradora y de los términos de su póliza.',
  FAQ_Q4: '¿Qué áreas atienden?',
  FAQ_A4:
    'PCG Contractors atiende a propietarios en San Antonio y áreas cercanas de Texas. Contáctenos para confirmar disponibilidad según su dirección y tiempos del proyecto.',
  FAQ_Q5: '¿También manejan reparaciones interiores y exteriores?',
  FAQ_A5:
    'Sí. Realizamos reparaciones interiores y exteriores del hogar, incluyendo trabajos relacionados con daños por tormenta y restauración general. Coordinamos el alcance para completar las reparaciones en un orden lógico y eficiente.',
  FAQ_CTA_TITLE: '¿Aún tiene preguntas?',
  FAQ_CTA_SUBTITLE: 'Estamos aquí para ayudarle.',
  FAQ_CONTACT_BTN: 'Contáctenos',

  CTA_BAND_TITLE: 'Reserve su inspección gratuita del hogar',
  CTA_BAND_SUB:
    'Ya sea que necesite techado, restauración por tormenta, reparaciones exteriores o interiores, o ayuda para entender un proyecto con seguro, PCG Contractors está listo para ayudarle.',
  CTA_BAND_BTN: 'Reserve su inspección gratuita del hogar',

  CONTACT_TITLE: 'Contacte a PCG Contractors',
  CONTACT_SUBTITLE:
    '¿Tiene preguntas sobre reparaciones del hogar, daños por tormenta, techado, reparaciones exteriores o interiores, o un proyecto con seguro? Envíenos un mensaje y nuestro equipo le responderá pronto.',
  CONTACT_FULL_NAME: 'Nombre completo',
  CONTACT_EMAIL: 'Correo electrónico',
  CONTACT_PHONE: 'Número de teléfono',
  CONTACT_SUBJECT: 'Asunto',
  CONTACT_MESSAGE: 'Mensaje',
  CONTACT_FULL_NAME_PH: 'Su nombre completo',
  CONTACT_EMAIL_PH: 'usted@ejemplo.com',
  CONTACT_PHONE_PH: '(210) 000-0000',
  CONTACT_SUBJECT_PH: '¿Cómo podemos ayudarle?',
  CONTACT_MESSAGE_PH: 'Cuéntenos sobre sus necesidades de restauración del hogar...',
  CONTACT_SUBMIT: 'Enviar mensaje',
  CONTACT_SUBMITTING: 'Enviando...',
  CONTACT_REQUIRED_ERROR: 'Complete Nombre completo, Correo electrónico y Mensaje.',
  CONTACT_EMAIL_ERROR: 'Ingrese un correo electrónico válido.',
  CONTACT_SEND_ERROR:
    'No se pudo enviar su mensaje en este momento. Inténtelo nuevamente en unos minutos.',
  CONTACT_SUCCESS: 'Gracias. Su mensaje fue enviado y nuestro equipo le contactará pronto.',

  FT_NEWS_DESC:
    'Suscríbase para consejos de reparación del hogar, orientación sobre tormentas, recordatorios de mantenimiento y novedades de PCG Contractors.',
  FT_EMAIL_PH: 'Su correo electrónico',
  FT_JOIN: 'Unirse',
  FT_DISCLAIMER:
    'Al suscribirse, consiente en recibir actualizaciones y acepta nuestra Política de privacidad.',
  FT_QUICK: 'Enlaces rápidos',
  FT_CONNECT: 'Conéctese con nosotros',
  FT_STAY: 'Manténgase al día',
  FT_LINK_HOME: 'Inicio',
  FT_LINK_ABOUT: 'Sobre nosotros',
  FT_LINK_BLOGS: 'Blog',
  FT_LINK_CONTACT: 'Contáctenos',
  FT_LINK_SVC: 'Servicios',
  FT_LINK_TST: 'Testimonios',
  FT_SO_FB: 'Página de Facebook',
  FT_SO_IG: 'Feed de Instagram',
  FT_SO_TW: 'Perfil de Twitter',
  FT_SO_LI: 'Página de LinkedIn',
  FT_SO_YT: 'Canal de YouTube',
  FT_SO_NAME_FB: 'Facebook',
  FT_SO_NAME_IG: 'Instagram',
  FT_SO_NAME_TW: 'Twitter',
  FT_SO_NAME_LI: 'LinkedIn',
  FT_SO_NAME_YT: 'YouTube',
  FT_COPYRIGHT: '© 2026 PCG Contractors. Todos los derechos reservados.',
  FT_PRIVACY: 'Política de privacidad',
  FT_TERMS: 'Términos y condiciones',
  FT_COOKIES: 'Configuración de cookies',

  'notFound.title': 'Página no encontrada',
  'notFound.message': 'La página que busca no existe o se ha movido.',
  'notFound.button': 'Volver al inicio',
};

export const messages = { en: en as Record<string, string>, es };

export type MessageKey = keyof typeof en;
