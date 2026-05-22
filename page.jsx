

export default function EllaLuxuryPhotographer() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden selection:bg-white selection:text-black">
      {/* Floating Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <div>
              <h1 className="text-xl md:text-2xl font-serif tracking-wide">
                Ella Sri Lanka Photographer
              </h1>

              
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide text-neutral-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#gallery" className="hover:text-white transition">Portfolio</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          <button className="bg-white text-black px-6 py-3 rounded-full text-sm tracking-wide hover:scale-105 hover:bg-[#f5f2ed] transition duration-300 shadow-2xl">
            Book Your Session
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden."
        style={{
          backgroundImage:
            "url('/mnt/data/IMG_9111.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="uppercase tracking-[6px] text-sm text-neutral-300 mb-4">
            Luxury Photography Experience
          </p>

          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-serif leading-tight drop-shadow-2xl">
              Ella Sri Lanka Photographer
            </h1>

            <p className="mt-4 text-neutral-300 tracking-[5px] uppercase text-sm">
              Cinematic Storytelling Across Sri Lanka
            </p>
          </div>

          <p className="text-lg md:text-2xl text-neutral-200 mb-6 max-w-4xl mx-auto leading-relaxed">
            Solo • Couple • Proposal • Honeymoon • Pre Wedding • Family Photography
          </p>

          

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="https://www.instagram.com/ellasrilankaphotographer/"
              target="_blank"
              className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-full text-sm tracking-wide hover:bg-white hover:text-black transition duration-300"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/ellasrilankaphotoshoot"
              target="_blank"
              className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-full text-sm tracking-wide hover:bg-white hover:text-black transition duration-300"
            >
              Facebook
            </a>

            <a
              href="https://wa.me/94771188536"
              target="_blank"
              className="bg-green-500 text-white px-5 py-3 rounded-full text-sm tracking-wide hover:scale-105 transition duration-300"
            >
              WhatsApp
            </a>

            <a
              href="https://share.google/5LapDabh3KPwVxjOJ"
              target="_blank"
              className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-full text-sm tracking-wide hover:bg-white hover:text-black transition duration-300"
            >
              Google Reviews
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-sm tracking-wide hover:scale-105 transition">
              View Gallery
            </button>

            <button className="border border-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-white hover:text-black transition">
              WhatsApp Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <img
            src="/mnt/data/WhatsApp Image 2026-05-21 at 9.47.47 PM.jpeg"
            className="rounded-3xl shadow-2xl object-cover h-[700px] w-full"
          />
        </div>

        <div>
          <p className="uppercase tracking-[4px] text-neutral-400 text-sm mb-4">
            About
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            Capturing Timeless Moments in Ella
          </h2>

          <p className="text-neutral-300 leading-9 text-[17px] md:text-[18px] font-light mt-6 max-w-2xl">
            <span className="font-serif italic text-[22px] md:text-[28px] text-white leading-relaxed block mb-6">Luxury Destination Photographer Based In Ella, Sri Lanka.</span>  I started photography in 2019 here in Ella — my hometown and the place I proudly call home. Because I grew up in Ella, I know the hidden locations, beautiful sunrise spots, peaceful nature views, and the real feeling of this magical place better than anyone.
            <br /><br />
            My goal is not only to take beautiful photos, but also to give foreign travelers unforgettable memories and a luxury experience during their time in Sri Lanka. I always focus on making every client feel comfortable, happy, and fully satisfied throughout the entire session.
            <br /><br />
            Today, most of my bookings come through happy clients and personal recommendations. Over the years, I have captured thousands of memories for travelers, couples, honeymooners, and families visiting Sri Lanka.
            <br /><br />
            Every session is guided naturally with care, creativity, cinematic storytelling, and local knowledge to capture genuine emotions and timeless moments people will remember forever.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-6 bg-gradient-to-b from-black to-neutral-950 relative">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <p className="uppercase tracking-[4px] text-neutral-400 text-sm mb-4">
            Services
          </p>

          <h2 className="text-4xl md:text-5xl font-serif">
            Luxury Photography Experiences
            <span className="block text-lg md:text-xl text-neutral-400 font-sans mt-4 tracking-wide">
              Cinematic storytelling inspired by luxury destination photography
            </span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            'Solo Photography',
            'Couple Sessions',
            'Proposal Photography',
            'Honeymoon Photography',
            'Pre Wedding Photography',
            'Family Photography',
            'Drone Cinematic Videos',
          ].map((service) => (
            <div
              key={service}
              className="border border-neutral-800 bg-white/5 backdrop-blur-xl rounded-[32px] p-8 hover:border-neutral-500 hover:-translate-y-2 transition duration-500 shadow-2xl"
            >
              <h3 className="text-2xl font-serif mb-4">{service}</h3>
              <p className="text-neutral-400 leading-7">
                Elegant storytelling with cinematic editing and luxury travel
                vibes.
              </p>
            </div>
            ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <p className="uppercase tracking-[4px] text-neutral-400 text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-serif">
            Cinematic Moments
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            '/mnt/data/IMG_9111.jpg',
            '/mnt/data/IMG_9155.jpg',
            '/mnt/data/IMG_9161(1).jpg',
            '/mnt/data/IMG_9210.jpg',
            '/mnt/data/IMG_9281.jpg',
            '/mnt/data/1A8A4602.jpg',
            '/mnt/data/1A8A4614.jpg',
            '/mnt/data/1A8A4635.jpg',
            '/mnt/data/IMG_1130.jpg',
            '/mnt/data/IMG_1153.jpg',
            '/mnt/data/IMG_1174.jpg',
            '/mnt/data/IMG_1195.jpg',
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              className="rounded-[32px] h-[500px] w-full object-cover hover:scale-[1.05] hover:brightness-110 transition duration-700 shadow-2xl"
            />
          ))}
        </div>
      </section>

      {/* Reels Section */}
      <section className="py-32 px-6 bg-neutral-950 border-t border-white/10 border-b border-white/10">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="uppercase tracking-[4px] text-neutral-400 text-sm mb-4">
            Cinematic Reels
          </p>

          <h2 className="text-4xl md:text-5xl font-serif">
            Travel Stories in Motion
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {['/mnt/data/reel1.mp4','/mnt/data/reel2.mp4','/mnt/data/reel3.mp4'].map((video,index)=>(
            <div
              key={index}
              className="rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-black"
            >
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[650px] object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Availability Section */}
      <section className="px-6 pb-16">
        <div>
          <p className="text-center text-neutral-300 mb-6 tracking-wide text-sm md:text-base">
            Available Across Sri Lanka • Book Your Luxury Session
          </p>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 max-w-4xl mx-auto grid md:grid-cols-4 gap-3 text-left">
          <div className="bg-white/5 rounded-xl px-4 py-3">
            <p className="text-xs uppercase tracking-[3px] text-neutral-400 mb-2">
              Service
            </p>
            <p className="text-white">Select Service</p>
          </div>

          <div className="bg-white/5 rounded-xl px-4 py-3">
            <p className="text-xs uppercase tracking-[3px] text-neutral-400 mb-2">
              Location
            </p>

            <input
              type="text"
              placeholder="Search Any Location in Sri Lanka"
              className="bg-transparent text-white placeholder:text-neutral-500 outline-none w-full"
            />
          </div>

          <div className="bg-white/5 rounded-xl px-4 py-3">
            <p className="text-xs uppercase tracking-[3px] text-neutral-400 mb-2">
              Date
            </p>
            <p className="text-white">Select Date</p>
          </div>

          <button className="bg-white text-black rounded-xl px-6 py-3 text-sm font-medium hover:scale-105 transition">
            Check Availability
          </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-32 px-6 bg-neutral-950 border-t border-white/10 border-b border-white/10">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <p className="uppercase tracking-[4px] text-neutral-400 text-sm mb-4">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-serif">
            Capturing Stories Across Sri Lanka
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            {
              number: '15,000+',
              label: 'Memories Captured',
            },
            {
              number: '100+',
              label: 'Solo Sessions',
            },
            {
              number: '255+',
              label: 'Couple Shoots',
            },
            {
              number: '65+',
              label: 'Proposal Sessions',
            },
            {
              number: '128+',
              label: 'Family Sessions',
            },
            {
              number: '43+',
              label: 'Drone Cinematic Videos',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl shadow-2xl"
            >
              <h3 className="text-4xl md:text-5xl font-serif mb-4 text-white">
                {item.number}
              </h3>

              <p className="text-neutral-400 tracking-wide text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        
      </section>

      {/* Story Section */}
      <section className="py-32 px-6 bg-[#f5f2ed] text-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-neutral-500 text-sm mb-6">
              Your Story
            </p>

            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              Hey There! What's Your Story?
            </h2>

            <p className="text-lg leading-9 text-neutral-700 max-w-4xl mx-auto">
              Every couple and every traveler has a unique story. Some dream of
              romantic mountain moments in Ella, while others want cinematic
              beach memories in Mirissa or luxury honeymoon sessions across Sri
              Lanka.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-neutral-700 text-lg leading-9">
            <div className="space-y-5">
              <p>• Romantic proposal photography in Ella</p>
              <p>• Luxury honeymoon sessions around Sri Lanka</p>
              <p>• Cinematic pre wedding storytelling</p>
              <p>• Natural couple photography experiences</p>
            </div>

            <div className="space-y-5">
              <p>• Solo traveler cinematic portraits</p>
              <p>• Luxury family photography sessions</p>
              <p>• Drone cinematic travel videos</p>
              <p>• Destination photography anywhere in Sri Lanka</p>
            </div>
          </div>

          <div className="text-center mt-20">
            <p className="text-2xl md:text-4xl font-serif leading-relaxed mb-10">
              How Would You Like To Tell Your Story?
            </p>

            <button className="bg-black text-white px-10 py-4 rounded-full hover:scale-105 transition duration-300">
              Book Your Experience
            </button>
          </div>
        </div>
      </section>

      {/* Best Locations in Ella */}
      <section className="py-32 px-6 bg-black border-t border-white/10 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-neutral-400 text-sm mb-4">
              Ella Locations
            </p>

            <h2 className="text-4xl md:text-5xl font-serif">
              Best Photoshoot Locations in Ella
            </h2>

            <p className="text-neutral-400 mt-6 max-w-3xl mx-auto leading-8 text-lg">
              Discover hidden cinematic locations around Ella for proposals,
              honeymoon photography, solo travel portraits, and unforgettable
              luxury memories in Sri Lanka.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Nine Arch Bridge',
                text: 'One of the most iconic locations in Ella surrounded by lush jungle and cinematic train views. Beautiful morning and afternoon train moments create unforgettable photos.',
              },
              {
                title: 'Little Adam’s Peak',
                text: 'Perfect for both sunrise and sunset photography with breathtaking mountain landscapes and golden cinematic light.',
              },
              {
                title: 'Hidden Waterfalls',
                text: 'Beautiful natural waterfalls around Ella ideal for adventurous, romantic, and cinematic storytelling sessions.',
              },
              {
                title: 'Tea Gardens',
                text: 'Luxury green tea plantations with peaceful nature vibes perfect for honeymoon and couple photography.',
              },
              {
                title: 'Forest Areas',
                text: 'Misty forest roads and hidden jungle paths creating dreamy cinematic travel photos in Ella.',
              },
              {
                title: 'Mountain Viewpoints',
                text: 'Panoramic sunrise and sunset viewpoints with unforgettable mountain scenery and clouds.',
              },
              {
                title: 'Luxury Hotel Gardens',
                text: 'Elegant hotel gardens and luxury resort environments offering tropical romantic photography vibes.',
              },
              {
                title: 'Haputale',
                text: 'A peaceful mountain destination near Ella famous for tea estates, cloud forests, and cinematic landscapes.',
              },
            ].map((location, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-500 shadow-2xl"
              >
                <h3 className="text-2xl font-serif mb-4 text-white">
                  {location.title}
                </h3>

                <p className="text-neutral-400 leading-8">
                  {location.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 border-t border-white/10 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-neutral-400 text-sm mb-4">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-serif">
              Why Travelers Love Working With Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fast Delivery',
                text: 'Professionally edited luxury photos delivered quickly via Google Drive.',
              },
              {
                title: 'Cinematic Editing',
                text: 'Elegant cinematic color grading inspired by luxury destination photography.',
              },
              {
                title: 'Flexible Locations',
                text: 'Available for photography sessions anywhere across Sri Lanka.',
              },
              {
                title: 'Drone Coverage',
                text: 'Beautiful aerial cinematic drone shots for unforgettable storytelling.',
              },
              {
                title: 'Natural Posing Help',
                text: 'Guidance during the session to create natural luxury moments.',
              },
              {
                title: 'WhatsApp Support',
                text: 'Easy communication and quick replies before and after your shoot.',
              },
              {
                title: '15,000+ Photos Captured',
                text: 'Years of experience capturing couples, proposals and travelers.',
              },
              {
                title: 'Luxury Experience',
                text: 'Professional premium photography experience from start to finish.',
              },
              {
                title: 'Trusted by Travelers',
                text: 'Loved by international travelers and couples visiting Sri Lanka.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-xl hover:border-white/30 hover:-translate-y-2 transition duration-500 shadow-2xl"
              >
                <h3 className="text-2xl font-serif mb-4 text-white">
                  {item.title}
                </h3>

                <p className="text-neutral-400 leading-8 text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Booking Works */}
      <section className="py-32 px-6 bg-[#f5f2ed] text-black border-t border-neutral-200 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-neutral-500 text-sm mb-4">
              Booking Process
            </p>

            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              How To Book Your Photoshoot
            </h2>

            <p className="text-neutral-600 mt-6 max-w-3xl mx-auto leading-8 text-lg">
              Booking your luxury photography experience in Ella and Sri Lanka is simple and stress free.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Select Your Shoot',
                text: 'Choose your photography experience such as proposal, honeymoon, couple, solo, or family session.',
              },
              {
                step: '02',
                title: 'Choose Your Location',
                text: 'Select your dream location in Ella or anywhere across Sri Lanka for your photoshoot.',
              },
              {
                step: '03',
                title: 'Share Your Ideas',
                text: 'Tell me about your dream photoshoot, travel plans, and the cinematic experience you would love to create in Sri Lanka.',
              },
              {
                step: '04',
                title: 'Send Your Inquiry',
                text: 'Share your date, ideas, and details through WhatsApp or the booking form to check availability.',
              },
            ].map((item, index) => (
              <a
                key={index}
                href={`https://wa.me/94771188536?text=Hi%20Champi%2C%20I%20would%20like%20to%20book%20a%20${encodeURIComponent(item.title)}%20photoshoot%20in%20Sri%20Lanka.`}
                target="_blank"
                className="bg-white rounded-[32px] p-8 shadow-xl border border-neutral-200 hover:-translate-y-2 transition duration-500 block"
              >
                <p className="text-neutral-400 text-sm tracking-[4px] mb-6">
                  {item.step}
                </p>

                <h3 className="text-2xl font-serif mb-4">
                  {item.title}
                </h3>

                <p className="text-neutral-600 leading-8">
                  {item.text}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[4px] text-neutral-400 text-sm mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mb-12">
            Loved by Travelers Worldwide
          </h2>

          <div className="overflow-hidden relative">
            <div className="flex gap-8 animate-[scroll_55s_linear_infinite] hover:[animation-play-state:paused] w-max">
              {[
                {
                  name: 'Emily & Daniel 🇬🇧',
                  review:
                    'Our proposal session in Ella was absolutely magical. Champika helped us choose the perfect hidden location and guided us naturally throughout the shoot. The decoration setup was beautiful, the photos looked cinematic, and everything felt luxury from start to finish.',
                },
                {
                  name: 'Sophie & Liam 🇦🇺',
                  review:
                    'One of the best photography experiences we had in Sri Lanka. Champika made us feel very comfortable, helped us with posing, and delivered the edited photos surprisingly fast. We will always remember this experience.',
                },
                {
                  name: 'Charlotte 🇫🇷',
                  review:
                    'The proposal decoration was stunning and the entire session felt very professional. Champika guided us to beautiful sunrise locations around Ella and captured unforgettable moments for our honeymoon.',
                },
                {
                  name: 'Lucas & Emma 🇩🇪',
                  review:
                    'If you are visiting Ella, this is the photographer you should book. Champika knows the best hidden locations, the lighting, and how to create real emotions naturally. Highly recommended for couples and proposals.',
                },
                {
                  name: 'Olivia 🇺🇸',
                  review:
                    'As a solo female traveler, I felt very safe and comfortable throughout the entire session. Champika was respectful, professional, and guided me carefully during the shoot. He knew peaceful hidden locations around Ella and made the experience feel relaxed, fun, and unforgettable. Highly recommended for solo female travelers visiting Sri Lanka.',
                },
                {
                  name: 'Noah & Mia 🇨🇦',
                  review:
                    'Champika was incredibly helpful during our shoot and guided us the entire time. The locations, drone shots, and storytelling style made our memories feel like a movie. Thank you for such an unforgettable experience.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="min-w-[350px] bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex text-xl">⭐⭐⭐⭐⭐</div>
                    <span className="text-xs tracking-[3px] uppercase text-neutral-500">
                      Verified Review
                    </span>
                  </div>

                  <p className="text-neutral-300 leading-8 mb-6 text-base">
                    “{item.review}”
                  </p>

                  <h4 className="font-serif text-xl text-white">
                    {item.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking */}
      <section id="contact" className="py-32 px-6 bg-[#f5f2ed] text-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="uppercase tracking-[4px] text-neutral-500 text-sm mb-4">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Get In Touch & Book Your Session
            </h2>

            <p className="text-neutral-600 leading-8 mb-10 text-lg">
              Reach out for luxury photography experiences across Ella and Sri Lanka.
              Let’s create cinematic memories together.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-neutral-300 rounded-2xl px-5 py-4 outline-none bg-white"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-neutral-300 rounded-2xl px-5 py-4 outline-none bg-white"
              />
            </div>

            <input
              type="text"
              placeholder="WhatsApp Number"
              className="border border-neutral-300 rounded-2xl px-5 py-4 outline-none bg-white w-full mb-4"
            />

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <select className="border border-neutral-300 rounded-2xl px-5 py-4 outline-none bg-white text-neutral-600">
                <option>Select Service</option>
                <option>Solo Photography</option>
                <option>Couple Session</option>
                <option>Proposal Photography</option>
                <option>Honeymoon Photography</option>
                <option>Family Photography</option>
              </select>

              <input
                type="date"
                className="border border-neutral-300 rounded-2xl px-5 py-4 outline-none bg-white text-neutral-600"
              />
            </div>

            <input
              type="text"
              placeholder="Shoot Location in Sri Lanka"
              className="border border-neutral-300 rounded-2xl px-5 py-4 outline-none bg-white w-full mb-4"
            />

            <textarea
              placeholder="Tell me about your dream photoshoot..."
              rows="6"
              className="border border-neutral-300 rounded-2xl px-5 py-4 outline-none bg-white w-full mb-6"
            ></textarea>

            <button className="bg-black text-white px-10 py-4 rounded-full hover:scale-105 transition duration-300">
              Check Availability
            </button>
          </div>

          <div>
            <div className="bg-white rounded-[32px] shadow-2xl p-8 border border-neutral-200 mb-8">
              <div className="flex items-center gap-5 mb-8">
                <img
                  src="/mnt/data/WhatsApp Image 2026-05-21 at 9.47.47 PM.jpeg"
                  className="w-24 h-24 rounded-full object-cover shadow-xl border-4 border-neutral-200"
                />

                <div>
                  <h3 className="text-3xl font-serif leading-tight">
                    Champika Rathnayaka
                  </h3>

                  <p className="text-neutral-500 mt-2 text-sm tracking-wide">
                    Ella Sri Lanka Photographer
                  </p>
                </div>
              </div>
              <h3 className="text-3xl font-serif mb-6">
                Ella Sri Lanka Photographer
              </h3>

              <div className="space-y-5 text-neutral-700 leading-8">
                <p>
                  📍 Ella, Sri Lanka <br />
                  Available Across Sri Lanka
                </p>

                <p>
                  📞 WhatsApp: 0771188536
                </p>

                <p>
                  ✨ Typically replies within an hour
                </p>

                <p>
                  🌴 Ella • Mirissa • Sigiriya • Kandy • Nuwara Eliya
                </p>
              </div>
            </div>

            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-neutral-200 h-[400px] bg-neutral-200 flex items-center justify-center text-neutral-500 text-lg">
              <iframe
                src="https://maps.google.com/maps?q=Ella%20Sri%20Lanka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/94771188536?text=Hi%20Ella%20Sri%20Lanka%20Photographer%2C%20I%20would%20like%20to%20book%20a%20photoshoot."
          target="_blank"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-110 transition duration-300"
        >
          <span className="flex items-center gap-2">
            💬 WhatsApp Us
          </span>
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#eef2ea] text-black px-6 py-24 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">
          <div>
            <h3 className="text-3xl font-serif mb-6">
              Ella Sri Lanka Photographer
            </h3>

            <p className="text-neutral-600 leading-8 text-base">
              Luxury photography experiences for travelers, couples,
              honeymooners, and families visiting Sri Lanka.
              <br /><br />
              Cinematic storytelling inspired by Ella and unforgettable travel memories.
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[3px] text-sm mb-6 text-neutral-500">
              Photography
            </h4>

            <div className="space-y-4 text-neutral-700">
              <p>Solo Photography</p>
              <p>Couple Sessions</p>
              <p>Proposal Photography</p>
              <p>Pre Wedding Shoots</p>
              <p>Honeymoon Photography</p>
              <p>Family Photography</p>
              <p>Drone Cinematic Videos</p>
            </div>
          </div>

          <div>
            <h4 className="uppercase tracking-[3px] text-sm mb-6 text-neutral-500">
              Locations
            </h4>

            <div className="space-y-4 text-neutral-700">
              <p>Ella</p>
              <p>Mirissa</p>
              <p>Sigiriya</p>
              <p>Nuwara Eliya</p>
              <p>Available Across Sri Lanka</p>
            </div>
          </div>

          <div>
            <h4 className="uppercase tracking-[3px] text-sm mb-6 text-neutral-500">
              Contact Details
            </h4>

            <div className="space-y-5 text-neutral-700 leading-8">
              <p>
                📞 0771188536 <br />
                WhatsApp Available
              </p>

              <p>
                📍 Ella, Sri Lanka <br />
                Available Islandwide
              </p>

              <p>
                ✨ Usually replies within an hour
              </p>

              <div className="flex items-center gap-4 pt-4 text-sm flex-wrap">
                <a
                  href="https://www.instagram.com/ellasrilankaphotographer/"
                  target="_blank"
                  className="bg-black text-white px-5 py-3 rounded-full hover:scale-105 transition"
                >
                  Instagram
                </a>

                <a
                  href="https://www.facebook.com/ellasrilankaphotoshoot"
                  target="_blank"
                  className="bg-black text-white px-5 py-3 rounded-full hover:scale-105 transition"
                >
                  Facebook
                </a>

                <a
                  href="https://share.google/5LapDabh3KPwVxjOJ"
                  target="_blank"
                  className="bg-black text-white px-5 py-3 rounded-full hover:scale-105 transition"
                >
                  Google Reviews
                </a>

                <a
                  href="https://www.tripadvisor.com/Attraction_Review-g11911827-d28482980-Reviews-Ella_Destination_Wedding_Photographer-Bandara_Koswatta_North_Western_Province.html"
                  target="_blank"
                  className="bg-black text-white px-5 py-3 rounded-full hover:scale-105 transition"
                >
                  TripAdvisor
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-300 mt-20 pt-10 grid md:grid-cols-3 gap-10 mb-10 text-left">
          <div>
            <h4 className="uppercase tracking-[3px] text-sm mb-4 text-neutral-500">
              WhatsApp
            </h4>

            <p className="text-neutral-700 leading-8">
              📞 +94 77 118 8536
              <br />
              Fast replies for bookings & inquiries
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[3px] text-sm mb-4 text-neutral-500">
              Email & Location
            </h4>

            <p className="text-neutral-700 leading-8">
              📍 Ella, Sri Lanka
              <br />
              Available Across Sri Lanka
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[3px] text-sm mb-4 text-neutral-500">
              Social Media
            </h4>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/ellasrilankaphotographer/"
                target="_blank"
                className="bg-black text-white px-4 py-2 rounded-full hover:scale-105 transition"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/ellasrilankaphotoshoot"
                target="_blank"
                className="bg-black text-white px-4 py-2 rounded-full hover:scale-105 transition"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-300 pt-8 text-center text-neutral-500 text-sm tracking-wide">
          © 2026 Ella Sri Lanka Photographer — Luxury Photography Experiences Across Sri Lanka
        </div>
      </footer>
    </div>
  )
}
