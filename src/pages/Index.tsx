
import React, { useState, useEffect } from 'react';
import { Heart, Scissors, Users, Clock, WhatsApp, Mail } from 'lucide-react';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [timeExpired, setTimeExpired] = useState(false);

  // Countdown timer effect
  useEffect(() => {
    if (timeLeft > 0 && !timeExpired) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setTimeExpired(true);
    }
  }, [timeLeft, timeExpired]);

  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setShowConfirmation(true);
      // Scroll to confirmation section
      setTimeout(() => {
        document.getElementById('confirmation')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Reset timer
  const resetTimer = () => {
    setTimeLeft(180);
    setTimeExpired(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200">
      {/* Header Section */}
      <header className="bg-white/90 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-6 text-center">
          {/* INSIRA SUA LOGO AQUI */}
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Segredos de Cássia Medeiros
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <Scissors className="w-16 h-16 mx-auto mb-6 text-purple-600" />
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Aprenda a costurar do <span className="text-purple-600">ZERO</span> sem enrolação!
            </h2>
            <div className="flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-blue-600 mr-2" />
              <p className="text-xl text-blue-600 font-semibold">
                +10.000 alunas já se beneficiaram deste curso
              </p>
            </div>
            <p className="text-2xl text-gray-700 mb-8 font-medium">
              Todos os meus segredos e +40 anos de experiência só para você
            </p>
            <div className="bg-red-500 text-white px-6 py-3 rounded-full inline-block mb-8 text-xl font-bold animate-pulse">
              Não perca esta ÚNICA oportunidade!
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-2xl border-4 border-red-500">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-red-600">
                ATENÇÃO: Essa oportunidade se encerra em:
              </h3>
            </div>
            
            {!timeExpired ? (
              <div className="text-6xl md:text-8xl font-bold text-red-600 mb-4 font-mono">
                {formatTime(timeLeft)}
              </div>
            ) : (
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-red-600 mb-4">
                  O TEMPO ACABOU!
                </div>
                <p className="text-xl text-gray-700 mb-4">
                  A oportunidade foi encerrada. Atualize a página para tentar novamente.
                </p>
                <button
                  onClick={resetTimer}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105"
                >
                  TENTAR NOVAMENTE
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Form Section */}
      {!timeExpired && (
        <section className="py-16 px-4 bg-white/50">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Garante já a sua vaga!
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-4 border-2 border-purple-300 rounded-2xl text-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-4 border-2 border-purple-300 rounded-2xl text-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Digite seu melhor e-mail"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-2xl text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  QUERO APRENDER AGORA
                </button>
              </form>
              
              <p className="text-center text-gray-600 mt-6 text-lg">
                As informações serão enviadas diretamente no seu e-mail.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Confirmation Section */}
      {showConfirmation && (
        <section id="confirmation" className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-4xl font-bold text-green-600 mb-6">
                FALTA UM PASSO!
              </h3>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Entre no grupo oficial do WhatsApp para receber os materiais, 
                tirar dúvidas e garantir seu certificado de participação.
              </p>
              
              <div className="space-y-4 mb-8">
                {/* INSIRA AQUI O LINK DO GRUPO DO WHATSAPP */}
                <a
                  href="#whatsapp-group"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-2xl text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <WhatsApp className="inline-block w-8 h-8 mr-3" />
                  ENTRAR NO GRUPO DO WHATSAPP
                </a>
                
                {/* INSIRA AQUI O LINK DE SUPORTE */}
                <a
                  href="#support"
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Mail className="inline-block w-6 h-6 mr-3" />
                  NÃO CONSIGO ENTRAR NO GRUPO
                </a>
              </div>
              
              <p className="text-gray-600 text-lg">
                Fique atenta ao seu e-mail, acabamos de enviar uma mensagem para você com mais informações.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Decorative Elements */}
      <div className="fixed top-20 left-4 opacity-20 pointer-events-none">
        <Scissors className="w-12 h-12 text-purple-400 animate-pulse" />
      </div>
      <div className="fixed bottom-20 right-4 opacity-20 pointer-events-none">
        <Heart className="w-16 h-16 text-pink-400 animate-bounce" />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p className="text-lg">
          © 2024 Segredos de Cássia Medeiros - Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
};

export default Index;
