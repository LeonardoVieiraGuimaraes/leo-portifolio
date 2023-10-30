export default function About() {
  return (
    <section className="container mx-auto my-4 max-w-5xl p-4" id="about">
      <div className=" p-4 text-center">
      <h2 className=" z-50 mb-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">
            Sobre
          </span>
          <span className="font-handwriting text-4xl">
            Mim
          </span>
        </h2>
        <p>
          Tenho mais 3 projetos executados e gostaria que o próximo seja o seu
        </p>
      </div>
      <div className=" relative mx-auto mt-20 max-w-lg">
        <div className=" w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48">
          <div className=" w-full h-full rounded-lg bg-gray-50 p-4">
          <p className="font-handwriting text-lg font-bold">Olá,</p>
          <p>
            <span className="mr-1">Mue nome é</span>
            <span className="font-headline font-bold uppercase text-blue-900">Leonardo Vieira Guimarães</span>
          </p>
          <table className="mt-4 w-full text-sm table-auto">
            <tbody>
              <tr>
                <td className="font-headline font-bold uppercase text-blue-900">Idade: 
                </td>
                <td>39</td>
              </tr>
              <tr>
                <td className="font-headline font-bold uppercase text-blue-900">Celular:</td>
                <td><a href="tel:+5538999352408" className="underline hover:text-blue-800">+55 (38)99935-2408</a></td>
              </tr>
              <tr>
                <td className="font-headline font-bold uppercase text-blue-900">Email:</td>
                <td> <a href="mailto:leonardovieiraxy@hotmail.com" className="underline hover:text-blue-800">leonadovieiraxy@hotmail.com</a></td>
              </tr>

              <tr>
                <td className="font-headline font-bold uppercase text-blue-900">Endereço:</td>
                <td> <a href="https://maps.app.goo.gl/J8GYMwibv7pjR8HE7" className="underline hover:text-blue-800">Sao Francisco - MG</a></td>
              </tr>
              <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </td>
                </tr>
              {/* <tr>
                <td>Localização</td>
                <td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30688.84778320753!2d-44.876730045314794!3d-15.955841358702505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7557a052c46ddc5%3A0x70a2134b1ce81ba3!2sS%C3%A3o%20Francisco%2C%20MG%2C%2039300-000!5e0!3m2!1spt-BR!2sbr!4v1697823253673!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></td>
                </tr> */}
            </tbody>
          </table>
          </div>
          <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-about-perfil bg-cover bg-center md:-left-1 md:-top-1 md:h-64 md:w-40">
      
            </div>
        </div>
      </div>
   
    </section>
  )
}