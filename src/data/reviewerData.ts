export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  logoBg: string;
  logoText: string;
  logoSub?: string;
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  logoBg: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer?: string;
  code?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  platform: 'Mekari Klikpajak' | 'Mekari Jurnal' | 'Mekari Talenta';
  category: 'Perpajakan' | 'Audit & Fraud' | 'Payroll & SDM' | 'Manajemen Kas';
  readTime: string;
  publishDate: string;
  excerpt: string;
  roleInArticle: 'Reviewer Ahli (CPA/CFP)' | 'Penulis & Reviewer Ahli';
  keyInsights: string[];
  auditChecklist: string[];
}

export interface ReviewerProfile {
  name: string;
  title: string;
  credentials: string[];
  currentRole: string;
  currentCompany: string;
  experienceYears: number;
  location: string;
  verifiedStatus: string;
  profileBioParagraphs: string[];
  capabilities: string[];
  skills: string[];
  industries: string[];
  languages: string[];
  experiences: ExperienceItem[];
  certifications: CertificationItem[];
  education: EducationItem[];
  articles: ArticleItem[];
}

export const reviewerData: ReviewerProfile = {
  name: 'Ade Fatwa Aulia',
  title: 'Head of Finance & Accounting | Reviewer Ahli Mekari',
  credentials: ['S.Ak.', 'CPA', 'CFP'],
  currentRole: 'Head Finance & Accounting',
  currentCompany: 'Fez Kinara Dining & Lounge',
  experienceYears: 25,
  location: 'DKI Jakarta, Indonesia',
  verifiedStatus: 'Reviewer Terverifikasi Mekari',
  profileBioParagraphs: [
    'Seorang profesional berpengalaman di bidang keuangan dan akuntansi dengan latar belakang pendidikan Akuntansi dari STIE Perbanas Jakarta. Dengan lebih dari 25 tahun pengalaman kerja, beliau telah menduduki berbagai posisi strategis seperti Supervisor, Assistant Manager, hingga Head of Finance & Accounting di berbagai perusahaan F&B dan hiburan ternama seperti PT. Optik Tunggal, Rich Fortune Entertainment, hingga PT. Darwaza Utama.',
    'Ade memiliki keahlian mendalam dalam pengelolaan arus kas, penyusunan laporan keuangan, pengendalian biaya, perpajakan, serta penggajian. Selain itu, ia juga menguasai software akuntansi seperti MYOB, Tally, Accurate dan Mekari Jurnal serta memiliki pemahaman tentang fungsi HRD. Ketelitiannya dalam bekerja dan kemampuannya menangani audit eksternal menjadikan Ade kandidat yang solid untuk posisi di bidang keuangan dan akuntansi perusahaan.'
  ],
  capabilities: ['Finance', 'Akuntansi'],
  skills: [
    'Finance Controller',
    'Financial Planning',
    'Finance Audit',
    'Financial Report',
    'Management Accounting',
    'Management Budgeting'
  ],
  industries: ['Food & Beverages'],
  languages: ['Bahasa Indonesia', 'English'],
  experiences: [
    {
      id: 'fez-kinara',
      role: 'Head Finance & Accounting',
      company: 'Fez Kinara Dining & Lounge',
      period: '2019 - saat ini',
      logoBg: 'bg-slate-100 text-slate-800',
      logoText: 'Fez Kinara',
      logoSub: 'Dining & Lounge',
      isCurrent: true
    },
    {
      id: 'scenic',
      role: 'Head Finance & Accounting',
      company: 'SCENIC Resto & Lounge',
      period: '2016 - 2017',
      logoBg: 'bg-slate-900 text-white',
      logoText: 'SCENIC',
      logoSub: 'Resto & Lounge'
    },
    {
      id: 'belly-clan',
      role: 'Head Finance & Accounting',
      company: 'The Belly Clan Resto & Lounge',
      period: '2014 - 2015',
      logoBg: 'bg-amber-100 text-amber-900',
      logoText: 'BELLY CLAN',
      logoSub: 'Resto'
    },
    {
      id: 'luvs',
      role: 'Head Finance & Accounting',
      company: "The Luv's Bar & Dine",
      period: '2009 - 2013',
      logoBg: 'bg-blue-100 text-blue-700',
      logoText: 'LUVS',
      logoSub: 'Bar & Dine'
    },
    {
      id: 'rich-fortune',
      role: 'Spv. Finance & Accounting',
      company: 'Rich Fortune Entertaiment',
      period: '2008',
      logoBg: 'bg-slate-50 text-slate-800 border border-slate-200',
      logoText: 'RICH',
      logoSub: 'Entertainment'
    },
    {
      id: 'bugs-cafe',
      role: 'Asst. Finance & Accounting Manager',
      company: 'Bugs Cafe',
      period: '2000 - 2007',
      logoBg: 'bg-rose-100 text-rose-800',
      logoText: 'BUGS',
      logoSub: 'CAFE'
    },
    {
      id: 'optik-tunggal',
      role: 'Supervisor Accounting',
      company: 'Optik Tunggal',
      period: '1994 - 2000',
      logoBg: 'bg-slate-100 text-slate-800',
      logoText: 'OPTIK TUNGGAL'
    },
    {
      id: 'raja-kota',
      role: 'Accounting',
      company: 'Raja Kota Karaoke',
      period: '1993',
      logoBg: 'bg-black text-amber-300',
      logoText: 'RAJA',
      logoSub: 'KOTA'
    }
  ],
  certifications: [
    {
      id: 'cpa',
      title: 'Certification Professional Accounting',
      issuer: 'Institut Akuntan Publik Indonesia (IAPI)',
      code: 'IAPI CPA Registered'
    },
    {
      id: 'cfp',
      title: 'Certification Financial Planner',
      issuer: 'Financial Planning Standards Board (FPSB)',
      code: 'FPSB CFP Registered'
    }
  ],
  education: [
    {
      id: 'perbanas',
      degree: 'Sarjana Akuntansi',
      institution: 'Perbanas Institute Jakarta',
      period: '1896 - 1990',
      logoBg: 'bg-emerald-50 text-emerald-800 border border-emerald-200'
    }
  ],
  articles: [
    {
      id: 'art-reimbursement-fraud',
      title: 'Expense Reimbursement Fraud: Bagaimana Tim Finance Mendeteksi dan Mencegahnya',
      platform: 'Mekari Talenta',
      category: 'Audit & Fraud',
      readTime: '6 min baca',
      publishDate: 'Terverifikasi & Diperbarui',
      excerpt: 'Penipuan klaim biaya pengeluaran (reimbursement fraud) adalah salah satu kebocoran kas internal terbesar yang sering tidak disadari manajemen. Artikel ini mengupas taktik deteksi otomatis dan audit sampling.',
      roleInArticle: 'Penulis & Reviewer Ahli',
      keyInsights: [
        'Identifikasi modus umum: duplicate submission, inflated expense, dan fictitious expense.',
        'Penggunaan rasio cross-check antara jam kerja aktif tim dengan stempel waktu struk pembayaran.',
        'Pentingnya integrasi sistem reimbursement dengan kebijakan approval matriks bertingkat tanpa toleransi celah manual.'
      ],
      auditChecklist: [
        'Verifikasi keaslian NPWP merchant rekanan pengeluaran',
        'Pemeriksaan log duplikasi tanggal dan jam transaksi antar-staf',
        'Penerapan batas pagu pengeluaran harian per level manajerial'
      ]
    },
    {
      id: 'art-pph21-ter',
      title: 'Panduan Lengkap Perhitungan PPh 21 TER (Tarif Efektif Rata-Rata) Berdasarkan PP 58/2023',
      platform: 'Mekari Klikpajak',
      category: 'Perpajakan',
      readTime: '8 min baca',
      publishDate: 'Terverifikasi & Diperbarui',
      excerpt: 'Simulasi mendalam penerapan skema TER Kategori A, B, dan C untuk pemotongan pajak gaji bulanan staf tetap maupun tenaga ahli, lengkap dengan penghitungan masa pajak terakhir (Desember).',
      roleInArticle: 'Reviewer Ahli (CPA/CFP)',
      keyInsights: [
        'Klasifikasi Penghasilan Tidak Kena Pajak (PTKP) terhadap penentuan tabel kategori TER.',
        'Metode rekonsiliasi pada masa pajak Desember menggunakan tarif Pasal 17 ayat (1) huruf a UU PPh.',
        'Validasi rumus otomatisasi payroll guna meminimalkan kesalahan manual potongan karyawan.'
      ],
      auditChecklist: [
        'Sinkronisasi status tanggungan PTKP awal tahun takwim',
        'Verifikasi batas bruto tunjangan natura/kenikmatan sesuai PMK 66/2023',
        'Audit bukti potong formulir 1721-VIII dan 1721-A1'
      ]
    },
    {
      id: 'art-cashflow-fnb',
      title: 'Strategi Manajemen Arus Kas (Cash Flow) Usaha Kuliner & Hospitality Menghadapi Volatilitas',
      platform: 'Mekari Jurnal',
      category: 'Manajemen Kas',
      readTime: '7 min baca',
      publishDate: 'Terverifikasi & Diperbarui',
      excerpt: 'Studi kasus nyata mengelola likuiditas industri restoran: cara menghitung safety buffer kas, menegosiasikan payment terms supplier bahan baku, dan mengamankan operating cash flow.',
      roleInArticle: 'Reviewer Ahli (CPA/CFP)',
      keyInsights: [
        'Membedakan kas riil dengan profitabilitas di atas kertas (laba akuntansi bukan berarti kas aman).',
        'Formula safety cash reserve minimal 3–4 bulan biaya operasional tetap (fixed overhead).',
        'Strategi rotasi stok menu agar persediaan tidak mengendap dan membebani modal kerja.'
      ],
      auditChecklist: [
        'Review rasio DSO dan DPO',
        'Audit rekonsiliasi kas harian EDC debit, kartu kredit, dan QRIS',
        'Simulasi skenario stres arus kas penurunan omset 30%'
      ]
    },
    {
      id: 'art-payroll-compliance',
      title: 'Sistem Payroll Online Terintegrasi: Menjaga Kepatuhan Ketenagakerjaan dan Audit Pajak',
      platform: 'Mekari Talenta',
      category: 'Payroll & SDM',
      readTime: '5 min baca',
      publishDate: 'Terverifikasi & Diperbarui',
      excerpt: 'Bagaimana integrasi absensi, BPJS Ketenagakerjaan, BPJS Kesehatan, dan insentif lembur dapat diaudit secara transparan dan akuntabel di mata hukum.',
      roleInArticle: 'Reviewer Ahli (CPA/CFP)',
      keyInsights: [
        'Korelasi formula lembur sesuai UU Cipta Kerja dengan batas maksimum jam kerja legal.',
        'Ketepatan perhitungan potongan jaminan pensiun sesuai batas atas upah tahunan.',
        'Penyediaan slip gaji digital yang memenuhi syarat transparansi bukti potong pajak.'
      ],
      auditChecklist: [
        'Audit formula lembur pada hari kerja biasa vs hari libur resmi',
        'Pengecekan batas maksimal dasar upah iuran BPJS Kesehatan & JP',
        'Rekonsiliasi total beban gaji di GL dengan rekapitulasi payroll'
      ]
    }
  ]
};

