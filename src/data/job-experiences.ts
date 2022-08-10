const JOB_EXPERIENCES = {
  en: [
    {
      title: "Team Leader / Interpreter",
      company: "CL International · Full-time",
      timeframe: "Mar 2016 - Feb 2017 · 1 year",
      description:
        "CL International was a moving company that operated in America's NATO bases, mainly the one situated at Gricignano di Aversa (CE). My job was to make sure that the operations were carried out according to the customer's instructions through the management of a team of 4/5 workers.",
    },
    {
      title: "Ramp Agent",
      company: "GH NAPOLI SPA · Seasonal",
      timeframe: "Jan 2017 - Mar 2020 · 3 years 3 months",
      description:
        "Supervision of all ground flight operations. My job was to ensure that each groud operation is carried out in accordance with the measures of safety and security.",
    },
    {
      title: "Web Developer",
      company: "Freelance",
      timeframe: "Jan 2020 - Mar 2021 · 1 year 3 months",
      description:
        "Developing and management of full stack websites for local customers. In particular for two insurance companies. The tech stack used was React, Nextjs, and Firebase.",
    },
    {
      title: "Apple Developer Academy student",
      company: "Apple Developer Academy @Unina Federico II",
      timeframe: "Sep 2021 - Jun 2022 · 10 months",
      description:
        "The Apple Developer Academy is a partnership between the University of Napoli Federico II and Apple. Training at the Academy is aimed at developing apps for the world’s most innovative and vibrant app ecosystem. The program focuses on software development, startup creation and app design with an emphasis on creativity and collaboration.",
    },
    {
      title: "Web Developer",
      company: "Datamanagement Italia SpA · Full-time",
      timeframe: "Mar 2021 - Present · 1 year 5 months",
      description:
        "Frontend developer, maintenance and development of applications for INPS, Agenzia delle Entrate. Main technologies used: React with Redux for state management, and Angularjs (v. 1.8.x).",
      current: true,
    },
  ],
  it: [
    {
      title: "Team Leader / Interprete",
      company: "CL International · Full-time",
      timeframe: "Mar 2016 - Feb 2017 · 1 anno",
      description:
        "CL International era una società di traslochi che operava nelle basi NATO americane, principalmente quella situata a Gricignano di Aversa (CE). Il mio compito era fare in modo che le operazioni venissero eseguite secondo le indicazioni del cliente attraverso la gestione di un team di 4/5 operai.",
    },
    {
      title: "Agente di Rampa",
      company: "GH NAPOLI SPA · Stagionale",
      timeframe: "Gen 2017 - Mar 2020 · 3 anni 3 mesi",
      description:
        "Supervisione di tutte le operazioni di volo a terra. Il mio lavoro consisteva nel garantire che ogni operazione di terra fosse eseguita nel rispetto delle misure di sicurezza e protezione.",
    },
    {
      title: "Web Developer",
      company: "Freelance",
      timeframe: "Jan 2020 - Mar 2021 · 1 anni 3 mesi",
      description:
        "Sviluppo e gestione siti web full stack per clienti locali. In particolare per due compagnie assicurative. Lo stack tecnologico principale utilizzato comprendevano React, Nextjs e Firebase.",
    },
    {
      title: "Studente Apple Developer Academy",
      company: "Apple Developer Academy @Unina Federico II",
      timeframe: "Set 2021 - Giu 2022 · 10 mesi",
      description:
        "L'Apple Developer Academy è una partnership tra l'Università degli Studi di Napoli Federico II e Apple. La formazione presso l'Academy è finalizzata allo sviluppo di app per l'ecosistema di app più innovativo e dinamico del mondo. Il programma si concentra sullo sviluppo di software, sulla creazione di startup e sulla progettazione di app, con particolare attenzione alla creatività e alla collaborazione.",
    },
    {
      title: "Web Developer",
      company: "Datamanagement Italia SpA · Full-time",
      timeframe: "Mar 2021 - Presente · 1 anno 5 mesi",
      description:
        "Frontend developer mantenimento e sviluppo applicativi per INPS, Agenzia delle Entrate. Tecnologie principali utilizzate: React con Redux per lo state management, e Angularjs ( v. 1.8.x ).",
    },
  ],
}

export type JobExperience =
  typeof JOB_EXPERIENCES[keyof typeof JOB_EXPERIENCES][0]

export default JOB_EXPERIENCES
