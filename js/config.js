/* ============================================================
   ⚙️ KONFIGURASI UTAMA - UBAH DI SINI SAHAJA!
   ============================================================
   Cara guna:
   - Tukar 'true' ke 'false' untuk MATIKAN seksyen
   - Tukar 'false' ke 'true' untuk HIDUPKAN seksyen
   - Semua teks, nombor, link ada di bawah
============================================================ */
const CONFIG = {
    // 📞 Maklumat Syarikat
    brand: {
        name: 'SWAPFIX',
        tagline: 'PC/Laptop Rosak? Pinjam Dulu Sementara Kami Baiki!',
        phone: '601174874115',           // Nombor WhatsApp (tanpa +)
        phoneDisplay: '+601174874115', // Format paparan
        email: 'hello@swapfix.my',
        address: 'Klang, Selangor, Malaysia',
        hours: 'Bila-bila masa',
        hashtags: '#Klang dan #ShahAlam'
    },

    // 🎨 Tema
    theme: {
        showPreloader: true,
        showScrollTop: true,
        showWhatsAppFloat: true,
        preloaderDuration: 1500 // ms
    },

    //  Menu Navigasi (ubah order/nama di sini)
    navMenu: [
        { label: 'Servis', href: '#services' },
        { label: 'Cara Kerja', href: '#how-it-works' },
        { label: 'Kelebihan', href: '#why-us' },
        { label: 'Pakej', href: '#offers' },
        { label: 'Testimoni', href: '#testimonials' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Hubungi Kami', href: '#contact', isCta: true }
    ],

    /* ==========================================================
       🎚️ FEATURE TOGGLES - ON/OFF SETIAP SEKSYEN
       ========================================================== */
    features: {
        hero: true,
        trustBar: true,
        services: true,
        howItWorks: true,
        whyUs: true,
        offers: false,
        testimonials: false,
        faq: true,
        cta: true,
        contact: true,
        footer: true,
        heroFloatingCards: true,
        heroStats: false,
        heroBadge: true
    },

    /* ==========================================================
       📝 KANDUNGAN SETIAP SEKSYEN
       ========================================================== */
    content: {
        // 🏠 Hero
        hero: {
            badge: { icon: 'fa-fire', text: '#Klang #SWAPFIXmy' },
            title: {
                before: ' PC/Laptop Rosak?',
                highlight: 'PC@Laptop Rosak? Pinjam Dulu Sementara Kami Baiki!',
                after: '🔥'
            },
            subtitle: 'Zero Downtime, 100% Produktif! Servis baiki PC & laptop terus di rumah atau pejabat anda. Data selamat 100%, tanpa format.',
            stats: [
                { value: 2500, suffix: '+', label: 'Pelanggan Gembira' },
                { value: 5000, suffix: '+', label: 'Laptop Diperbaiki' },
                { value: 8, suffix: '+', label: 'Tahun Pengalaman' }
            ],
            buttons: [
                { text: 'WhatsApp Sekarang', icon: 'fab fa-whatsapp', type: 'whatsapp', href: 'wa' },
                { text: 'Lihat Servis', icon: 'fas fa-arrow-down', type: 'outline', href: '#services' }
            ],
            laptopScreen: {
                icon: 'fas fa-check-circle',
                title: '100% Productive!',
                subtitle: 'Laptop anda siap dibaiki'
            },
            floatingCards: [
                { icon: 'fa-shield-alt', color: 'green', title: 'Data Selamat', subtitle: '100% Terjamin', position: 'card-1' },
                { icon: 'fa-laptop', color: 'blue', title: 'Loaner Laptop', subtitle: 'PERCUMA', position: 'card-2' },
                { icon: 'fa-bolt', color: 'orange', title: 'Servis Pantas', subtitle: 'Same Day', position: 'card-3' }
            ]
        },

        // ✅ Trust Bar
        trustBar: [
            { icon: 'fa-check-circle', text: 'Pemeriksaan PERCUMA' },
            { icon: 'fa-check-circle', text: 'Tak Boleh Baiki = Tak Perlu Bayar' },
            { icon: 'fa-check-circle', text: 'Servis di Rumah/Pejabat' },
            { icon: 'fa-check-circle', text: 'Laporan Video Disediakan' }
        ],

        // 🛠️ Services
        services: {
            tag: { icon: 'fa-tools', text: 'Servis Kami' },
            title: 'Servis Baiki PC & Laptop Profesional',
            subtitle: 'Kami menyediakan pelbagai servis pembaikan untuk memastikan peranti anda berfungsi seperti baru.',
            items: [
                { icon: 'fa-microchip', color: 'blue', title: 'Board Level Repair', desc: 'Pembaikan peringkat papan induk (motherboard) termasuk penggantian cip, IC, dan komponen elektronik yang rosak.' },
                { icon: 'fa-hdd', color: 'green', title: 'Data Recovery', desc: 'Pemulihan data dari hard disk, SSD, atau media storan yang rosak. Data anda selamat 100% tanpa format.' },
                { icon: 'fa-fan', color: 'orange', title: 'Cleaning & Maintenance', desc: 'Servis pembersihan dalaman, penggantian thermal paste, dan penyelenggaraan untuk prestasi optimum.' },
                { icon: 'fa-display', color: 'green', title: 'Screen Replacement', desc: 'Penggantian skrin laptop yang pecah atau rosak dengan panel berkualiti tinggi dan waranti.' },
                { icon: 'fa-battery-full', color: 'blue', title: 'Battery Replacement', desc: 'Penggantian bateri laptop dengan bateri original atau berkualiti tinggi untuk hayat bateri yang lebih lama.' },
                { icon: 'fa-keyboard', color: 'orange', title: 'Keyboard & Parts', desc: 'Penggantian keyboard, trackpad, port USB, dan pelbagai komponen laptop yang rosak atau tidak berfungsi.' }
            ]
        },

        // 📋 How It Works
        howItWorks: {
            tag: { icon: 'fa-route', text: 'Cara Kerja' },
            title: '4 Langkah Mudah',
            subtitle: 'Proses yang ringkas dan telus untuk memastikan laptop anda siap dibaiki dengan cepat.',
            steps: [
                { number: 1, title: 'Hubungi Kami', desc: 'WhatsApp kami dengan masalah laptop anda. Kami akan berikan anggaran awal secara PERCUMA.' },
                { number: 2, title: 'Pinjam Laptop', desc: 'Kami hantar laptop pinjaman PERCUMA supaya anda boleh terus bekerja tanpa gangguan.' },
                { number: 3, title: 'Kami Baiki', desc: 'Teknikal kami akan baiki laptop anda di rumah/pejabat atau di bengkel kami dengan teliti.' },
                { number: 4, title: 'Siap & Hantar', desc: 'Laptop siap dibaiki, kami hantar balik dan ambil laptop pinjaman. Mudah dan pantas!' }
            ]
        },

        // ⭐ Why Us
        whyUs: {
            tag: { icon: 'fa-star', text: 'Kelebihan Kami' },
            title: 'Kenapa Pilih SWAPFIX?',
            subtitle: 'Kami bukan sekadar baiki laptop — kami pastikan produktiviti anda tidak terganggu.',
            features: [
                { icon: 'fa-laptop-medical', title: 'Loaner Laptop PERCUMA', desc: 'Dapatkan laptop pinjaman sementara laptop anda dibaiki. Zero downtime, 100% produktif!' },
                { icon: 'fa-shield-alt', title: 'Data Selamat 100%', desc: 'Baiki TANPA FORMAT. Semua data, fail, dan setting anda kekal selamat tanpa sebarang risiko.' },
                { icon: 'fa-home', title: 'Servis di Rumah/Pejabat', desc: 'Tidak perlu keluar rumah. Teknikal kami datang terus ke lokasi anda untuk servis.' },
                { icon: 'fa-video', title: 'Laporan Video', desc: 'Setiap pemeriksaan disertakan laporan video supaya anda boleh lihat keadaan sebenar laptop anda.' },
                { icon: 'fa-hand-holding-dollar', title: 'Tak Boleh Baiki = Tak Bayar', desc: 'Jika kami tidak dapat membaiki laptop anda, anda TIDAK PERLU membayar apa-apa. Tiada risiko!' },
                { icon: 'fa-bolt', title: 'Servis Pantas', desc: 'Kebanyakan pembaikan siap dalam masa 24-48 jam. Pengganti lengkap disediakan jika perlu.' }
            ]
        },

        // 💰 Offers
        offers: {
            tag: { icon: 'fa-tags', text: 'Pakej Servis' },
            title: 'Pilih Pakej Yang Sesuai',
            subtitle: 'Harga telus tanpa caj tersembunyi. Pemeriksaan sentiasa PERCUMA.',
            plans: [
                {
                    icon: 'fa-stethoscope',
                    title: 'Pemeriksaan',
                    price: 'PERCUMA',
                    priceNote: '',
                    desc: 'Diagnosis lengkap laptop anda',
                    featured: false,
                    badge: '',
                    features: [
                        { text: 'Pemeriksaan menyeluruh', enabled: true },
                        { text: 'Laporan video diagnosis', enabled: true },
                        { text: 'Sebut harga terperinci', enabled: true },
                        { text: 'Nasihat teknikal percuma', enabled: true },
                        { text: 'Loaner laptop', enabled: false }
                    ],
                    buttonText: 'Tempah Sekarang',
                    buttonType: 'outline-dark'
                },
                {
                    icon: 'fa-wrench',
                    title: 'Servis Standard',
                    price: 'RM150',
                    priceNote: 'ke atas',
                    desc: 'Pembaikan lengkap dengan loaner laptop',
                    featured: true,
                    badge: 'PALING POPULAR',
                    features: [
                        { text: 'Semua dalam Pemeriksaan', enabled: true },
                        { text: 'Loaner laptop PERCUMA', enabled: true },
                        { text: 'Servis di rumah/pejabat', enabled: true },
                        { text: 'Waranti 30 hari', enabled: true },
                        { text: 'Data selamat 100%', enabled: true }
                    ],
                    buttonText: 'Tempah Sekarang',
                    buttonType: 'primary'
                },
                {
                    icon: 'fa-crown',
                    title: 'Servis Premium',
                    price: 'RM300',
                    priceNote: 'ke atas',
                    desc: 'Board level repair & full replacement',
                    featured: false,
                    badge: '',
                    features: [
                        { text: 'Semua dalam Standard', enabled: true },
                        { text: 'Board level repair', enabled: true },
                        { text: 'Penggantian komponen', enabled: true },
                        { text: 'Waranti 90 hari', enabled: true },
                        { text: 'Priority support', enabled: true }
                    ],
                    buttonText: 'Tempah Sekarang',
                    buttonType: 'outline-dark'
                }
            ]
        },

        // 💬 Testimonials
        testimonials: {
            tag: { icon: 'fa-comments', text: 'Testimoni' },
            title: 'Apa Kata Pelanggan Kami',
            subtitle: 'Ribuan pelanggan di Klang dan sekitarnya sudah mempercayai SWAPFIX.',
            items: [
                {
                    stars: 5,
                    text: 'Laptop saya mati totally, risau sangat sebab ada data kerja penting. SWAPFIX baiki tanpa format, semua data selamat! Dapat loaner laptop pula tu. Terbaik!',
                    name: 'Ahmad Razif',
                    role: 'Usahawan, Klang',
                    initial: 'A'
                },
                {
                    stars: 5,
                    text: 'Servis datang ke office, baiki laptop company kami yang rosak. Pantas dan profesional. Loaner laptop bagi terus, kerja tak terganggu. Highly recommended!',
                    name: 'Siti Nurhaliza',
                    role: 'Manager IT, Shah Alam',
                    initial: 'S'
                },
                {
                    stars: 5,
                    text: 'Screen laptop pecah, hantar WhatsApp pagi, petang dah siap! Harga berpatutan dan ada waranti. Laporan video pun ada, sangat telus. Terima kasih SWAPFIX!',
                    name: 'Muhammad Faiz',
                    role: 'Freelancer, Petaling Jaya',
                    initial: 'M'
                }
            ]
        },

        // ❓ FAQ
        faq: {
            tag: { icon: 'fa-question-circle', text: 'FAQ' },
            title: 'Soalan Lazim',
            subtitle: 'Jawapan kepada soalan yang sering ditanya oleh pelanggan kami.',
            items: [
                {
                    q: 'Adakah pemeriksaan benar-benar PERCUMA?',
                    a: 'Ya! Pemeriksaan dan diagnosis laptop anda adalah 100% PERCUMA tanpa sebarang caj tersembunyi. Kami juga akan berikan laporan video dan sebut harga sebelum sebarang kerja pembaikan dimulakan. Jika anda tidak bersetuju dengan harga, tiada paksaan untuk teruskan.'
                },
                {
                    q: 'Bagaimana dengan data dalam laptop saya?',
                    a: 'Kami baiki laptop anda TANPA FORMAT. Semua data, fail, gambar, dokumen, dan setting anda kekal 100% selamat. Kami faham betapa pentingnya data anda, jadi kami ambil langkah berjaga-jaga untuk memastikan tiada kehilangan data semasa proses pembaikan.'
                },
                {
                    q: 'Apakah itu loaner laptop?',
                    a: 'Loaner laptop adalah laptop pinjaman PERCUMA yang kami berikan kepada anda sementara laptop anda sedang dibaiki. Ini memastikan anda boleh terus bekerja dan produktif tanpa sebarang gangguan (Zero Downtime). Anda hanya perlu pulang loaner laptop apabila laptop anda sudah siap dibaiki.'
                },
                {
                    q: 'Berapa lama masa pembaikan?',
                    a: 'Kebanyakan pembaikan siap dalam masa 24-48 jam. Untuk kerosakan yang lebih kompleks seperti board level repair, ia mungkin mengambil masa 3-5 hari bekerja. Kami akan berikan anggaran masa yang tepat selepas pemeriksaan awal.'
                },
                {
                    q: 'Adakah ada waranti selepas pembaikan?',
                    a: 'Ya! Kami menyediakan waranti untuk setiap pembaikan. Pakej Standard datang dengan waranti 30 hari, manakala Pakej Premium mempunyai waranti 90 hari. Waranti merangkumi kerja pembaikan dan komponen yang diganti.'
                },
                {
                    q: 'Kawasan mana yang anda liputi?',
                    a: 'Kami beroperasi utama di Klang dan kawasan sekitarnya termasuk Shah Alam, Petaling Jaya, Subang Jaya, Puchong, dan Lembah Klang. Untuk kawasan lain, sila hubungi kami untuk semakan ketersediaan. Servis di rumah/pejabat tersedia untuk kawasan liputan kami.'
                }
            ]
        },

        // 📢 CTA
        cta: {
            title: 'Laptop Rosak? Jangan Panik! 🔧',
            subtitle: 'Hubungi kami sekarang untuk pemeriksaan PERCUMA. Pinjam laptop dulu, kami baiki yang rosak. Zero downtime, 100% produktif!',
            buttons: [
                { text: 'WhatsApp Sekarang', icon: 'fab fa-whatsapp', type: 'whatsapp', href: 'wa' },
                { text: 'Hubungi Kami', icon: 'fas fa-phone', type: 'outline', href: 'tel' }
            ],
            trustItems: [
                { icon: 'fa-check-circle', text: 'Pemeriksaan PERCUMA' },
                { icon: 'fa-check-circle', text: 'Tak Boleh Baiki = Tak Bayar' },
                { icon: 'fa-check-circle', text: 'Loaner Laptop PERCUMA' }
            ]
        },

        //  Contact
        contact: {
            tag: { icon: 'fa-envelope', text: 'Hubungi Kami' },
            title: 'Ada Soalan? Hubungi Kami!',
            subtitle: 'Kami sedia membantu anda. Hubungi kami melalui mana-mana saluran di bawah.',
            infoTitle: 'Maklumat Hubungan',
            infoDesc: 'Kami beroperasi dari Isnin hingga Sabtu, 9 pagi hingga 6 petang. Untuk kecemasan, WhatsApp kami pada bila-bila masa.',
            details: [
                { icon: 'fab fa-whatsapp', label: 'WhatsApp', value: 'phoneDisplay' },
                { icon: 'fas fa-phone', label: 'Telefon', value: 'phoneDisplay' },
                { icon: 'fas fa-envelope', label: 'Email', value: 'email' },
                { icon: 'fas fa-location-dot', label: 'Lokasi', value: 'address' },
                { icon: 'fas fa-clock', label: 'Waktu Operasi', value: 'hours' }
            ],
            social: [
                { icon: 'fab fa-facebook-f', label: 'Facebook', href: '#' },
                { icon: 'fab fa-instagram', label: 'Instagram', href: '#' },
                { icon: 'fab fa-tiktok', label: 'TikTok', href: '#' },
                { icon: 'fab fa-youtube', label: 'YouTube', href: '#' }
            ],
            formTitle: 'Hantar Mesej',
            formFields: [
                { type: 'row', fields: [
                    { name: 'name', label: 'Nama Penuh', placeholder: 'Masukkan nama anda', type: 'text', required: true },
                    { name: 'phone', label: 'No. Telefon', placeholder: '012-345 6789', type: 'tel', required: true }
                ]},
                { type: 'single', field: { name: 'email', label: 'Email', placeholder: 'email@contoh.com', type: 'email', required: true } },
                { type: 'single', field: { name: 'service', label: 'Jenis Servis', type: 'select', required: true, options: [
                    'Pilih jenis servis', 'Pemeriksaan Percuma', 'Board Level Repair', 'Data Recovery',
                    'Screen Replacement', 'Battery Replacement', 'Cleaning & Maintenance', 'Keyboard & Parts', 'Lain-lain'
                ]}},
                { type: 'single', field: { name: 'message', label: 'Terangkan Masalah', placeholder: 'Terangkan masalah laptop/PC anda...', type: 'textarea', required: true } }
            ],
            submitText: 'Hantar Mesej'
        },

        // 🦶 Footer
        footer: {
            brandDesc: 'Servis baiki PC & laptop profesional di Klang. Zero downtime, 100% produktif. Pinjam laptop PERCUMA sementara tunggu siap.',
            columns: [
                {
                    title: 'Servis',
                    links: [
                        { text: 'Board Level Repair', href: '#services' },
                        { text: 'Data Recovery', href: '#services' },
                        { text: 'Screen Replacement', href: '#services' },
                        { text: 'Battery Replacement', href: '#services' },
                        { text: 'Cleaning & Maintenance', href: '#services' }
                    ]
                },
                {
                    title: 'Syarikat',
                    links: [
                        { text: 'Tentang Kami', href: '#why-us' },
                        { text: 'Cara Kerja', href: '#how-it-works' },
                        { text: 'Testimoni', href: '#testimonials' },
                        { text: 'Pakej & Harga', href: '#offers' },
                        { text: 'FAQ', href: '#faq' }
                    ]
                },
                {
                    title: 'Hubungi',
                    links: [
                        { text: 'WhatsApp', href: 'wa', external: true },
                        { text: 'phoneDisplay', href: 'tel', external: true },
                        { text: 'email', href: 'email', external: true },
                        { text: 'Klang, Selangor', href: '#contact' }
                    ]
                }
            ],
            bottomLinks: [
                { text: 'Polisi Privasi', href: '#' },
                { text: 'Terma & Syarat', href: '#' }
            ]
        }
    }
};
