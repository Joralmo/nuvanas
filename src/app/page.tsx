"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Heart,
  Shield,
  Sparkles,
  Coffee,
  Phone,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-nuvanas-green-50 to-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-nuvanas-green-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-heading font-bold text-nuvanas-green-700"
          >
            🌿 Nuvanas
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex space-x-6"
          >
            <a
              href="#inicio"
              className="text-nuvanas-green-700 hover:text-nuvanas-green-600 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#sobre"
              className="text-nuvanas-green-700 hover:text-nuvanas-green-600 transition-colors"
            >
              Sobre Nosotros
            </a>
            <a
              href="#productos"
              className="text-nuvanas-green-700 hover:text-nuvanas-green-600 transition-colors"
            >
              Productos
            </a>
            <a
              href="#contacto"
              className="text-nuvanas-green-700 hover:text-nuvanas-green-600 transition-colors"
            >
              Contacto
            </a>
          </motion.nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl md:text-6xl font-heading font-bold text-nuvanas-green-800 mb-6 leading-tight"
            >
              Nuvanas
              <span className="block text-nuvanas-gold-600">
                &quot;descubre lo que tu cuerpo necesita&quot;
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="text-xl md:text-2xl text-nuvanas-green-700 mb-8 max-w-2xl mx-auto"
            >
              Nuvanas sin duda quiere brindar bienestar real a través del cuidado facial, corporal y de la salud interior, con productos y hábitos sencillos pero efectivos que ayuden a las personas a verse y sentirse bien.
            </motion.p>

            <motion.div variants={fadeUpVariants} className="mb-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-nuvanas-green-600 hover:bg-nuvanas-green-700 text-black px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  Descubre nuestros productos
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://wa.me/573146232756', '_blank')}
                  className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contáctanos
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="relative max-w-2xl mx-auto"
            >
              <img
                src="/assets/ProductosNuvanas.jpeg"
                alt="Productos Nuvanas"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -top-4 -right-4 bg-nuvanas-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                ✨ 100% Natural
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sobre Nuvanas */}
      <section id="sobre" className="py-16 bg-nuvanas-earth-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-heading font-bold text-nuvanas-green-800 mb-8"
            >
              Sobre Nuvanas
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="text-lg text-nuvanas-green-700 mb-8 leading-relaxed"
            >
              Queremos que cada persona encuentre en lo natural una forma de cuidarse con amor, sin complicaciones y conectando con su propio bienestar.
            </motion.p>

            <motion.p
              variants={fadeUpVariants}
              className="text-lg text-nuvanas-green-700 mb-12 leading-relaxed"
            >
              Nuestros productos están diseñados para brindar bienestar real a través del cuidado facial, corporal y de la salud interior, con ingredientes naturales y efectivos.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-nuvanas-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-nuvanas-green-600" />
                </div>
                <h3 className="font-semibold text-nuvanas-green-800 mb-2">
                  100% Natural
                </h3>
                <p className="text-sm text-nuvanas-green-600">
                  Ingredientes puros de la naturaleza
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-nuvanas-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-nuvanas-rose-600" />
                </div>
                <h3 className="font-semibold text-nuvanas-green-800 mb-2">
                  Artesanal
                </h3>
                <p className="text-sm text-nuvanas-green-600">
                  Hecho con amor y cuidado
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-nuvanas-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-nuvanas-gold-600" />
                </div>
                <h3 className="font-semibold text-nuvanas-green-800 mb-2">
                  Sin Químicos
                </h3>
                <p className="text-sm text-nuvanas-green-600">
                  Libre de ingredientes dañinos
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-nuvanas-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-nuvanas-earth-600" />
                </div>
                <h3 className="font-semibold text-nuvanas-green-800 mb-2">
                  Bienestar
                </h3>
                <p className="text-sm text-nuvanas-green-600">
                  Cuidado integral cuerpo y mente
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section id="productos" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-heading font-bold text-nuvanas-green-800 text-center mb-4"
            >
              Nuestros Productos Estrella
            </motion.h2>
            
            <motion.p
              variants={fadeUpVariants}
              className="text-lg text-nuvanas-green-600 text-center mb-12 max-w-3xl mx-auto"
            >
              Descubre nuestra línea completa de productos naturales, cada uno diseñado específicamente para tu bienestar y cuidado personal.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Crema Dental Herbs */}
              <motion.div variants={fadeUpVariants}>
                <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-nuvanas-gold-100 overflow-hidden">
                  <div className="relative">
                    <img
                      src="/assets/PastaDentalFullInfo.jpeg"
                      alt="Crema Dental Herbs HGW"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-nuvanas-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ✨ Herbal
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-nuvanas-green-800 mb-3">
                      Crema Dental Herbs
                    </h3>
                    <p className="text-nuvanas-green-600 mb-4">
                      Pasta dental HGW con ingredientes naturales, sin pigmentos añadidos. Formulada con hierbas tradicionales chinas.
                    </p>
                    <div className="text-sm text-nuvanas-green-700 mb-4">
                      <div className="mb-2 font-semibold">Beneficios:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Reduce hinchazón y fiebre en las encías</li>
                        <li>• Proporciona aliento fresco</li>
                        <li>• Elimina la caries</li>
                        <li>• Alivia inflamación en la garganta</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-nuvanas-gold-100 text-nuvanas-gold-700 rounded-full text-sm">
                        Hierbas Chinas
                      </span>
                      <span className="px-3 py-1 bg-nuvanas-gold-100 text-nuvanas-gold-700 rounded-full text-sm">
                        Sin Pigmentos
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Toallas Sanitarias */}
              <motion.div variants={fadeUpVariants}>
                <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-nuvanas-rose-100 overflow-hidden">
                  <div className="relative">
                    <img
                      src="/assets/ToallasFullInfo.jpeg"
                      alt="Toallas Sanitarias HGW con Turmalina"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-nuvanas-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      💎 Turmalina
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-nuvanas-green-800 mb-3">
                      Toallas Sanitarias HGW
                    </h3>
                    <p className="text-nuvanas-green-600 mb-4">
                      Diseñadas para la higiene y protección durante el período menstrual. Con banda aniónica de turmalina.
                    </p>
                    <div className="text-sm text-nuvanas-green-700 mb-4">
                      <div className="mb-2 font-semibold">Beneficios:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Alta capacidad de absorción</li>
                        <li>• Neutraliza olores con turmalina</li>
                        <li>• Previene bacterias y hongos</li>
                        <li>• Equilibra el pH vaginal</li>
                        <li>• Disminuye cólicos e inflamaciones</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-nuvanas-rose-100 text-nuvanas-rose-700 rounded-full text-sm">
                        Turmalina
                      </span>
                      <span className="px-3 py-1 bg-nuvanas-rose-100 text-nuvanas-rose-700 rounded-full text-sm">
                        Antibacteriana
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Jabón de Oliva */}
              <motion.div variants={fadeUpVariants}>
                <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-nuvanas-green-100 overflow-hidden">
                  <div className="relative">
                    <img
                      src="/assets/JabonDeOlivaNuevaPortada.jpeg"
                      alt="Jabón de Oliva HGW"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-nuvanas-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      🫒 Oliva
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-nuvanas-green-800 mb-3">
                      Jabón de Oliva HGW
                    </h3>
                    <p className="text-nuvanas-green-600 mb-4">
                      Para limpiar, hidratar y suavizar la piel. Contiene aceite de oliva, miel y vitamina E.
                    </p>
                    <div className="text-sm text-nuvanas-green-700 mb-4">
                      <div className="mb-2 font-semibold">Aporta:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Hidratación natural combate sequedad</li>
                        <li>• Suavidad y tersura</li>
                        <li>• Limpieza sin irritación</li>
                        <li>• Ayuda contra el acné</li>
                        <li>• Firmeza con vitamina E</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-nuvanas-green-100 text-nuvanas-green-700 rounded-full text-sm">
                        Aceite de Oliva
                      </span>
                      <span className="px-3 py-1 bg-nuvanas-green-100 text-nuvanas-green-700 rounded-full text-sm">
                        Vitamina E
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Jabón de Turmalina */}
              <motion.div variants={fadeUpVariants}>
                <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-nuvanas-earth-100 overflow-hidden">
                  <div className="relative">
                    <img
                      src="/assets/JabonTurmalinaPortadaNueva.jpeg"
                      alt="Jabón de Turmalina HGW"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-nuvanas-earth-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      💎 Turmalina
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-nuvanas-green-800 mb-3">
                      Jabón de Turmalina HGW
                    </h3>
                    <p className="text-nuvanas-green-600 mb-4">
                      Adecuado para todo tipo de piel, se puede usar en la cara y en el cuerpo. Con propiedades antibacterianas.
                    </p>
                    <div className="text-sm text-nuvanas-green-700 mb-4">
                      <div className="mb-2 font-semibold">Beneficios:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Elimina manchas y combate acné</li>
                        <li>• Cicatrizante - regenera células</li>
                        <li>• Mejora circulación sanguínea</li>
                        <li>• Unifica el tono de la piel</li>
                        <li>• Mejora elasticidad</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-nuvanas-earth-100 text-nuvanas-earth-700 rounded-full text-sm">
                        Turmalina
                      </span>
                      <span className="px-3 py-1 bg-nuvanas-earth-100 text-nuvanas-earth-700 rounded-full text-sm">
                        Cicatrizante
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Candy Blueberry */}
              <motion.div variants={fadeUpVariants}>
                <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-nuvanas-rose-100 overflow-hidden">
                  <div className="relative">
                    <img
                      src="/assets/BluberryCandy.jpeg"
                      alt="Candy Blueberry"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-nuvanas-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      🫐 Antioxidante
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-nuvanas-green-800 mb-3">
                      Candy Blueberry
                    </h3>
                    <p className="text-nuvanas-green-600 mb-4">
                      Alto contenido de antioxidantes, especialmente antocianinas, que apoyan la respuesta inmune.
                    </p>
                    <div className="text-sm text-nuvanas-green-700 mb-4">
                      <div className="mb-2 font-semibold">Te ayudará a:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Mejorar la fatiga visual</li>
                        <li>• Disminuir el estrés y ansiedad</li>
                        <li>• Apoyar la respuesta inmune</li>
                        <li>• Promover la salud general</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-nuvanas-rose-100 text-nuvanas-rose-700 rounded-full text-sm">
                        Antioxidantes
                      </span>
                      <span className="px-3 py-1 bg-nuvanas-rose-100 text-nuvanas-rose-700 rounded-full text-sm">
                        Anti-estrés
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Protectores Diarios */}
              <motion.div variants={fadeUpVariants}>
                <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-nuvanas-green-100 overflow-hidden">
                  <div className="relative">
                    <img
                      src="/assets/ProtectoresDiariasNuevaImagen.jpeg"
                      alt="Protectores Diarios HGW"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-nuvanas-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      💎 Turmalina
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-nuvanas-green-800 mb-3">
                      Protectores Diarios HGW
                    </h3>
                    <p className="text-nuvanas-green-600 mb-4">
                      Con turmalina, para absorber el flujo vaginal y mantener la zona íntima fresca y limpia.
                    </p>
                    <div className="text-sm text-nuvanas-green-700 mb-4">
                      <div className="mb-2 font-semibold">Beneficios:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Equilibra el pH vaginal</li>
                        <li>• Previene infecciones</li>
                        <li>• Mantiene frescura</li>
                        <li>• Propiedades antibacterianas</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-nuvanas-green-100 text-nuvanas-green-700 rounded-full text-sm">
                        Turmalina
                      </span>
                      <span className="px-3 py-1 bg-nuvanas-green-100 text-nuvanas-green-700 rounded-full text-sm">
                        pH Equilibrado
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Gel de Aloe Vera */}
              <motion.div variants={fadeUpVariants}>
                <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-nuvanas-earth-100 overflow-hidden">
                  <div className="relative">
                    <img
                      src="/assets/GelAloeVera.jpeg"
                      alt="Gel de Aloe Vera HGW"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-nuvanas-earth-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      🌿 Aloe Vera
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-nuvanas-green-800 mb-3">
                      Gel de Aloe Vera HGW
                    </h3>
                    <p className="text-nuvanas-green-600 mb-4">
                      Gel natural de aloe vera para hidratación profunda, ideal para pieles sensibles y con propiedades regeneradoras.
                    </p>
                    <div className="text-sm text-nuvanas-green-700 mb-4">
                      <div className="mb-2 font-semibold">Beneficios:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Hidratación profunda sin grasa</li>
                        <li>• Calma irritaciones y enrojecimiento</li>
                        <li>• Regenerador celular natural</li>
                        <li>• Cicatrizante para heridas leves</li>
                        <li>• Refrescante e hidratante</li>
                        <li>• Minimiza dilatación de poros</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-nuvanas-earth-100 text-nuvanas-earth-700 rounded-full text-sm">
                        Aloe Vera
                      </span>
                      <span className="px-3 py-1 bg-nuvanas-earth-100 text-nuvanas-earth-700 rounded-full text-sm">
                        Regenerador
                      </span>
                      <span className="px-3 py-1 bg-nuvanas-earth-100 text-nuvanas-earth-700 rounded-full text-sm">
                        Todo Tipo Piel
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Galería adicional de productos */}
            <motion.div variants={fadeUpVariants} className="mt-16">
              <h3 className="text-2xl font-semibold text-nuvanas-green-800 text-center mb-8">
                Más de Nuestra Línea de Productos
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="group relative overflow-hidden rounded-xl">
                  <img
                    src="/assets/MielDeAbeja.jpeg"
                    alt="Miel de Abeja"
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Miel de Abeja</span>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-xl">
                  <img
                    src="/assets/AloeVeraGel.jpeg"
                    alt="Aloe Vera Gel"
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Aloe Vera Gel</span>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-xl">
                  <img
                    src="/assets/Aceite.jpeg"
                    alt="Aceite Natural"
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Aceite Natural</span>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-xl">
                  <img
                    src="/assets/ToallaNocturnas.jpeg"
                    alt="Toallas Nocturnas"
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Toallas Nocturnas</span>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-xl">
                  <img
                    src="/assets/ComboHigieneFemenina.jpeg"
                    alt="Combo Higiene Femenina"
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Combo Higiene</span>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-xl">
                  <img
                    src="/assets/NuestrosJabones.jpeg"
                    alt="Colección de Jabones"
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Colección Jabones</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={fadeUpVariants} className="text-center mt-12">
              <Button
                size="lg"
                onClick={() => window.open('https://wa.me/573146232756', '_blank')}
                className="bg-nuvanas-green-600 hover:bg-nuvanas-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-black cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Consulta por Nuestros Productos
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Beneficios especiales */}
      <section className="py-16 bg-gradient-to-br from-nuvanas-green-50 to-nuvanas-earth-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-heading font-bold text-nuvanas-green-800 text-center mb-12"
            >
              ¿Por qué elegir Nuvanas?
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={fadeUpVariants} className="text-center">
                <div className="w-20 h-20 bg-nuvanas-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-nuvanas-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-nuvanas-green-800 mb-4">
                  Cuidado Natural
                </h3>
                <p className="text-nuvanas-green-700 leading-relaxed">
                  Formulados con ingredientes naturales como turmalina, hierbas chinas 
                  y aceite de oliva para un cuidado suave y efectivo.
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariants} className="text-center">
                <div className="w-20 h-20 bg-nuvanas-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-nuvanas-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-nuvanas-green-800 mb-4">
                  Propiedades Únicas
                </h3>
                <p className="text-nuvanas-green-700 leading-relaxed">
                  La turmalina aporta propiedades antibacterianas y antiinflamatorias, 
                  equilibrando el pH y neutralizando olores naturalmente.
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariants} className="text-center">
                <div className="w-20 h-20 bg-nuvanas-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-nuvanas-gold-600" />
                </div>
                <h3 className="text-xl font-semibold text-nuvanas-green-800 mb-4">
                  Bienestar Integral
                </h3>
                <p className="text-nuvanas-green-700 leading-relaxed">
                  Desde cuidado dental hasta protección íntima, cada producto está 
                  diseñado para tu bienestar completo y natural.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-nuvanas-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-heading font-bold text-nuvanas-green-800 text-center mb-12"
            >
              Lo que dicen nuestros clientes
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeUpVariants}>
                <Card className="h-full border-nuvanas-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-nuvanas-green-200 rounded-full flex items-center justify-center mr-4">
                        <Heart className="w-6 h-6 text-nuvanas-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-nuvanas-green-800">
                          María Elena
                        </h4>
                        <p className="text-sm text-nuvanas-green-600">
                          Cliente desde 2023
                        </p>
                      </div>
                    </div>
                    <p className="text-nuvanas-green-700 italic">
                      &quot;La crema dental Herbs es increíble. Mis encías ya no se inflaman 
                      y mi aliento se mantiene fresco todo el día. Me encanta que sea 
                      completamente natural.&quot;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUpVariants}>
                <Card className="h-full border-nuvanas-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-nuvanas-rose-200 rounded-full flex items-center justify-center mr-4">
                        <Sparkles className="w-6 h-6 text-nuvanas-rose-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-nuvanas-green-800">
                          Ana Sofía
                        </h4>
                        <p className="text-sm text-nuvanas-green-600">
                          Mama de 2
                        </p>
                      </div>
                    </div>
                    <p className="text-nuvanas-green-700 italic">
                      &quot;Las toallas sanitarias HGW con turmalina son una maravilla. 
                      No más olores ni molestias, y me siento mucho más cómoda 
                      durante mi período. Son perfectas.&quot;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUpVariants}>
                <Card className="h-full border-nuvanas-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-nuvanas-earth-200 rounded-full flex items-center justify-center mr-4">
                        <Coffee className="w-6 h-6 text-nuvanas-earth-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-nuvanas-green-800">
                          Lucía
                        </h4>
                        <p className="text-sm text-nuvanas-green-600">
                          Diseñadora
                        </p>
                      </div>
                    </div>
                    <p className="text-nuvanas-green-700 italic">
                      &quot;Los Candy Blueberry me han ayudado muchísimo con la fatiga 
                      visual del trabajo en computadora. Además saben deliciosos 
                      y me siento menos estresada.&quot;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-heading font-bold text-nuvanas-green-800 mb-8"
            >
              Conecta con Nuvanas
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="text-lg text-nuvanas-green-700 mb-12"
            >
              ¿Tienes preguntas sobre nuestros productos naturales? ¿Quieres conocer más sobre 
              los beneficios de la turmalina o nuestros ingredientes herbales? Contáctanos y 
              descubre cómo Nuvanas puede ayudarte a cuidarte de manera natural.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="grid md:grid-cols-4 gap-6"
            >
              <a
                href="https://wa.me/573146232756"
                className="flex flex-col items-center p-6 bg-nuvanas-green-50 rounded-xl hover:bg-nuvanas-green-100 transition-colors duration-300 group"
              >
                <MessageCircle className="w-12 h-12 text-nuvanas-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-nuvanas-green-800 mb-2">
                  WhatsApp
                </h3>
                <p className="text-sm text-nuvanas-green-600">
                  +57 314 6232756
                </p>
              </a>

              <a
                href="https://instagram.com/nuvanas.co"
                className="flex flex-col items-center p-6 bg-nuvanas-rose-50 rounded-xl hover:bg-nuvanas-rose-100 transition-colors duration-300 group"
              >
                <Instagram className="w-12 h-12 text-nuvanas-rose-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-nuvanas-green-800 mb-2">
                  Instagram
                </h3>
                <p className="text-sm text-nuvanas-green-600">@nuvanas.co</p>
              </a>

              <a
                href="mailto:nuvanascol@gmail.com"
                className="flex flex-col items-center p-6 bg-nuvanas-gold-50 rounded-xl hover:bg-nuvanas-gold-100 transition-colors duration-300 group"
              >
                <MessageCircle className="w-12 h-12 text-nuvanas-gold-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-nuvanas-green-800 mb-2">
                  Correo
                </h3>
                <p className="text-sm text-nuvanas-green-600">nuvanascol@gmail.com</p>
              </a>

              <a
                href="tel:+573146232756"
                className="flex flex-col items-center p-6 bg-nuvanas-earth-50 rounded-xl hover:bg-nuvanas-earth-100 transition-colors duration-300 group"
              >
                <Phone className="w-12 h-12 text-nuvanas-earth-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-nuvanas-green-800 mb-2">
                  Teléfono
                </h3>
                <p className="text-sm text-nuvanas-green-600">+57 314 6232756</p>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-nuvanas-green-800 to-nuvanas-green-900 text-white py-16">
        <div className="container mx-auto px-4 text-black">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo y descripción */}
            <div className="text-center md:text-left">
              <div className="text-3xl font-heading font-bold mb-4 text-white">
                🌿 Nuvanas
              </div>
              <p className="text-nuvanas-green-100 mb-4 leading-relaxed">
                &quot;Descubre lo que tu cuerpo necesita&quot;
              </p>
              <p className="text-nuvanas-green-200 text-sm">
                Bienestar real a través del cuidado natural. Productos sencillos pero efectivos.
              </p>
            </div>

            {/* Contacto */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
              <div className="space-y-2 text-nuvanas-green-100">
                <p className="flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +57 314 6232756
                </p>
                <p className="flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  nuvanascol@gmail.com
                </p>
                <p className="flex items-center justify-center">
                  <Instagram className="w-4 h-4 mr-2" />
                  @nuvanas.co
                </p>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4 text-white">Enlaces Rápidos</h3>
              <div className="space-y-2">
                <a
                  href="#inicio"
                  className="block text-nuvanas-green-200 hover:text-white transition-colors"
                >
                  Inicio
                </a>
                <a
                  href="#sobre"
                  className="block text-nuvanas-green-200 hover:text-white transition-colors"
                >
                  Sobre Nosotros
                </a>
                <a
                  href="#productos"
                  className="block text-nuvanas-green-200 hover:text-white transition-colors"
                >
                  Productos
                </a>
                <a
                  href="#contacto"
                  className="block text-nuvanas-green-200 hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-nuvanas-green-700 pt-6 text-center">
            <p className="text-nuvanas-green-200 text-sm">
              © 2025 Nuvanas. Todos los derechos reservados. Hecho con 💚 para tu bienestar.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
