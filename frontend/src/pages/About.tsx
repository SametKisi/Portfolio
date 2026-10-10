import Logo from "../logo"

const About = () => {
    return (
        <div className="p-3 flex flex-col gap-3">
            <div className="bg-white border border-gray-200 shadow-sm h-fit rounded-md flex items-center p-10 gap-2">
                    <Logo className="size-70 flex box-content"/>

                <div className="flex flex-col ml-5">
                    <h2 className="font-bold">Kısaca Ben</h2>
                    <p>Merhaba, ben Samet. Yazılım geliştirmek, yeni teknolojileri keşfetmek ve bilimsel konular hakkında okumak en büyük ilgi alanlarım. Boş zamanlarımda kişisel projeler geliştiriyor, öğrendiklerimi bu sitede paylaşarak hem kendimi geliştiriyor hem de başkalarına faydalı olmayı hedefliyorum.</p>
                </div>

            </div>
            <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl font-bold shrink-0">İlgi Alanlarım</h2>
                <div className="flex-1 border-t border-gray-200"></div>
            </div>
            <div className="flex flex-1 gap-5">
                <div className="bg-white border border-gray-200 shadow-sm min-h-38 w-fit h-fit rounded-md flex flex-1 p-10 gap-2">
                    <div className="flex flex-col ml-5">
                        <h2 className="font-bold">Yazılım</h2>
                        <p>Ben oyun, web, mobil gibi alanlarda kendimi geliştirdim</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 shadow-sm min-h-38 w-fit h-fit rounded-md flex flex-1 p-10 gap-2">
                    <div className="flex flex-col ml-5">
                        <h2 className="font-bold">Öğrencilik</h2>
                        <p>İnönü üniversitesinde Bilgisayar mühendisliği 2.sınıf öğrencisiyim</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 shadow-sm min-h-38 h-fit w-fit rounded-md flex flex-1 p-10 gap-2">
                    <div className="flex flex-col ml-5">
                        <h2 className="font-bold">Kişisel Gelişim</h2>
                        <p>Kişisel gelişim alanında ilgiliyim</p>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default About