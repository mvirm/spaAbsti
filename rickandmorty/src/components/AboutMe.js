const AboutMe = () => {
    const $about = document.createElement('div');
    $about.className = 'about'
    $about.innerHTML = `
    <h4>¡Hola👋!</h4>
    <p> Soy FullStack Web Developer 👩‍💻con una especialización orientada hacia el FrontEnd.
    <br/>
    Mi experiencia en diseño y producción en empresas textiles líderes me ha enseñado valores como la responsabilidad y la capacidad de adaptación; además de una sólida habilidad para las relaciones interpersonales, basada en la cordialidad y empatía, mientras que mi capacidad para liderar equipos hacia metas claras ha sido fundamental para obtener resultados sobresalientes 😉.
    <br/>
    En el ámbito del desarrollo web, me desenvuelvo en el FrontEnd y BackEnd, utilizando metodologías ágiles como SCRUM y herramientas como GIT. Mi conjunto de habilidades técnicas es sólido e incluye el  dominio de HTML, CSS, JavaScript, React JS, Redux, Node JS, Express, PostgreSQL, Sequelize y Jest para pruebas unitarias. Además, tengo experiencia en el uso de frameworks CSS como Boostrap, TailwindCSS y MaterialUI🚀
    <br/>
    Estoy comprometida en mejorar constantemente💪por lo que,  en este momento, estoy trabajando en fortalecer mi nivel de inglés, para subir de nivel intermedio B1 a avanzado ✅️.
    <br/>
    Soy una persona resiliente, capaz de encontrar lo positivo en situaciones adversas. Disfruto aprender y mejorar continuamente, ya que los desafíos me motivan. Mi enfoque se centra en resolver problemas de manera efectiva, respaldado por un pensamiento analítico y una gran adaptabilidad ante los distintos escenarios que puedan surgir durante el desarrollo de proyectos.
    <br/>
    📍Si querés saber mas sobre mi  encontrame 🔎 en: 
    <br/>
    <a href= 'https://github.com/mvirm' target='_blank' rel='noopener'>GitHub</a>
    <br/>
    <a href= 'https://www.linkedin.com/in/virginiamontoya/' target='_blank' rel='noopener'>LinkedIn</a>
    <br/>
    o escribime:
    <br/>
    <a href="mailto:mvirginiamontoya@gmail.com">mvirginiamontoya@gmail.com</a></p>
    <section>
    <h3>ViR Montoya</h3>
    <h3>Full Stack Developer</h3>
    <h4>con un amor especial por el FrontEnd</h4>
    </section> 
    `
    return $about;
}

export default AboutMe;