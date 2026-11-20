// Pantalla de carga (dura menos de 2 segundos en total)
const preloader = document.getElementById("preloader");
if (preloader) {
    setTimeout(() => {
        preloader.classList.add("hide");
        setTimeout(() => {
            preloader.remove();
        }, 350);
    }, 1250);
}

const trayectoria = [
    { nombre: "SylenMC", rol: "Owner", desc: "Servidor de Minecraft al que le dedico todo mi tiempo, enfoque y esfuerzo. Lidero su crecimiento, administración, configuración técnica y comunidad.", destacada: true },
    { nombre: "Shadow Studio", rol: "Owner", desc: "Studio especializado en Minecraft, proyectos web y plugins, enfocado en entregar soluciones técnicas y configuraciones para comunidades." },
    { nombre: "LatamNet", rol: "Owner", desc: "Impulsé el proyecto desde cero como owner, definiendo su visión, estructura inicial, dinámicas de comunidad y bases técnicas." },
    { nombre: "SurCraft", rol: "Mod", desc: "Moderación activa en un servidor de Minecraft, asegurando el cumplimiento de normas, resolviendo reportes y manteniendo un entorno sano." },
    { nombre: "Kronix Network", rol: "Sr Mod", desc: "Supervisión avanzada de la moderación y el equipo de staff, manejo de casos delicados, control de sanciones y coordinación operativa." },
    { nombre: "GolemMC", rol: "Developer", desc: "Desarrollo y configuración de sistemas para servidor de Minecraft: ajuste de plugins, optimización, permisos, economías y corrección de fallos." },
    { nombre: "VeltrixSMP", rol: "Owner", desc: "Dirección general y administración de un SMP enfocado en la supervivencia y la comunidad, gestionando reglas, eventos y progresión." },
    { nombre: "Solarycraft", rol: "Owner", desc: "Gestión integral del servidor como Owner, coordinando su identidad, configuración, organización interna y experiencia de juego." },
    { nombre: "VolcánMC", rol: "Helper", desc: "Atención directa y orientación a los usuarios nuevos y recurrentes, resolviendo dudas, guiando en mecánicas y escalando incidencias." },
    { nombre: "Glow Studio", rol: "Administrador de eventos", desc: "Planificación, organización y coordinación de eventos dentro de Minecraft, cuidando la dinámica, reglas y fluidez para la comunidad." },
    { nombre: "Flux Network", rol: "Co Owner", desc: "Co-administración y toma de decisiones estratégicas junto a la dirección, apoyando la gestión de la network y el crecimiento comunitario." },
    { nombre: "VoidSmP", rol: "Owner", desc: "Liderazgo y administración de VoidSmP, supervisando el funcionamiento del servidor, la convivencia y la evolución del SMP." },
    { nombre: "ImperioMC", rol: "Mod", desc: "Moderación y vigilancia del servidor para mantener el orden, atender dudas y reportes y garantizar una experiencia limpia y respetuosa." },
    { nombre: "VyperSMP", rol: "Owner", desc: "Administración y dirección de un SMP de Minecraft enfocado en la comunidad, coordinando dinámicas, organización interna, reglas y estabilidad." }
];

const journeyGrid = document.getElementById("journeyGrid");
if (journeyGrid) {
    journeyGrid.innerHTML = trayectoria.map(item => `
        <div class="journey-card ${item.destacada ? "highlight" : ""} reveal">
            <div class="journey-top"><h3>${item.nombre}</h3><span class="role-badge">${item.rol}</span></div>
            <p>${item.desc}</p>
        </div>
    `).join("");
}

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function setMenuState(isOpen) {
    navLinks.classList.toggle("active", isOpen);
    menuToggle.classList.toggle("open", isOpen);
    const icon = menuToggle.querySelector("i");
    if (icon) {
        icon.classList.toggle("fa-bars", !isOpen);
        icon.classList.toggle("fa-times", isOpen);
    }
}

menuToggle.addEventListener("click", () => setMenuState(!navLinks.classList.contains("active")));
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => setMenuState(false)));

function revealElements() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < windowHeight - 100) el.classList.add("active");
    });
}

window.addEventListener("scroll", revealElements);
revealElements();

const discordBtn = document.querySelector(".social-btn.discord");
if (discordBtn) {
    discordBtn.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText("rykeryt.25");
        const originalText = discordBtn.innerHTML;
        discordBtn.innerHTML = '<i class="fas fa-check"></i> ¡Usuario copiado!';
        setTimeout(() => { discordBtn.innerHTML = originalText; }, 2500);
    });
}

