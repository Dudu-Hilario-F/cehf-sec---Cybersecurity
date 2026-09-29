/* ==========================================================
   DATA: edit this file to update the site. No build step.
   ----------------------------------------------------------
   status: COMPLETED | IN PROGRESS | PLANNED | PLACEHOLDER
   type:   LAB | PROJECT | STUDY | CERTIFICATION
   Empty link ("") => the button is shown as disabled.
   Text fields accept a string or { en: "...", pt: "..." }.
   ========================================================== */

window.SITE = {
  name: "Carlos Eduardo Hilario Ferreira",
  handle: "cehf",           // used in the terminal prompt: cehf@sec:~$
  github: "",               // TODO: https://github.com/<user>
  linkedin: "",             // TODO: https://www.linkedin.com/in/<user>
  email: ""                 // TODO: professional e-mail
};

/* OFFENSIVE SECURITY: featured projects */
window.PROJECTS = [
  {
    id: "PRJ-000",
    type: "PROJECT",
    status: "PLACEHOLDER",
    title: { en: "ACTIVE DIRECTORY ATTACK LAB", pt: "LAB DE ATAQUE A ACTIVE DIRECTORY" },
    category: "Active Directory",
    objective: {
      en: "Template card. Replace with the real objective, scenario, architecture and result.",
      pt: "Card modelo. Substitua pelo objetivo, cenário, arquitetura e resultado reais."
    },
    tags: ["Kerberos", "LDAP", "SMB", "BloodHound", "Privilege Escalation", "Lateral Movement"],
    links: { architecture: "", writeup: "", source: "" }
  }
];

/* SECURITY LABS */
window.LABS = [
  {
    id: "LAB-001",
    type: "LAB",
    status: "PLACEHOLDER",
    title: { en: "ACTIVE DIRECTORY COMPROMISE", pt: "COMPROMETIMENTO DE ACTIVE DIRECTORY" },
    objective: {
      en: "Template card. Describe the real objective of the lab here.",
      pt: "Card modelo. Descreva aqui o objetivo real do laboratório."
    },
    attack: ["Recon", "Enumeration", "Credential Access", "Lateral Movement", "Privilege Escalation"],
    defense: ["Detection", "Investigation", "Containment", "Hardening"],
    stack: ["Windows Server", "Kali Linux", "Wazuh", "Sysmon", "BloodHound", "Proxmox"],
    links: { architecture: "", writeup: "", source: "" }
  }
];

/* CTF / OPERATIONS log (newest first) */
window.OPERATIONS = [
  { date: "YYYY-MM-DD", platform: "HTB", target: "[ MACHINE ]", os: "Linux",   topic: "Privilege Escalation",  status: "PLACEHOLDER" },
  { date: "YYYY-MM-DD", platform: "THM", target: "[ ROOM ]",    os: "Windows", topic: "Active Directory",      status: "PLACEHOLDER" },
  { date: "YYYY-MM-DD", platform: "LAB", target: "[ LAB ]",     os: "Windows", topic: "Detection Engineering", status: "PLACEHOLDER" }
];

/* CERTIFICATIONS / LEARNING */
window.CERTS = [
  { name: "[ CERTIFICATION ]", area: "Red Team / Cybersecurity",     status: "PLACEHOLDER" },
  { name: "[ CERTIFICATION ]", area: "Pentesting",                   status: "PLACEHOLDER" },
  { name: "[ CERTIFICATION ]", area: "Infrastructure / Networking",  status: "PLACEHOLDER" }
];
