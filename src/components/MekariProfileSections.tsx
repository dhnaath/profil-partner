import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award, GraduationCap, Building2, Check, ExternalLink } from 'lucide-react';
import { ReviewerProfile, ExperienceItem, CertificationItem, EducationItem } from '../data/reviewerData';

interface MekariProfileSectionsProps {
  profile: ReviewerProfile;
  onOpenVerifyModal: (code?: string) => void;
}

export const MekariProfileSections: React.FC<MekariProfileSectionsProps> = ({
  profile,
  onOpenVerifyModal
}) => {
  // Interactive view more/less toggles matching the screenshots
  const [expExpanded, setExpExpanded] = useState(true);
  const [certExpanded, setCertExpanded] = useState(true);
  const [eduExpanded, setEduExpanded] = useState(true);

  const displayedExperiences = expExpanded
    ? profile.experiences
    : profile.experiences.slice(0, 4);

  const displayedCerts = certExpanded
    ? profile.certifications
    : profile.certifications.slice(0, 1);

  const displayedEdu = eduExpanded
    ? profile.education
    : profile.education.slice(0, 1);

  return (
    <div className="space-y-10 py-6">
      
      {/* 1. SEKSI PROFIL (Exact from Screenshot 3) */}
      <section id="profil" className="scroll-mt-24">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-4">
          Profil
        </h2>
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
          {profile.profileBioParagraphs.map((para, idx) => (
            <p key={idx} className="text-slate-700 leading-relaxed font-normal">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* 2. SEKSI PENGALAMAN (Exact from Screenshot 1) */}
      <section id="pengalaman" className="scroll-mt-24">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Pengalaman
          </h2>
          <button
            onClick={() => setExpExpanded(!expExpanded)}
            className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <span>{expExpanded ? 'View less' : 'View more'}</span>
            {expExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Card Container with Company items matching screenshot 1 */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-2 sm:p-3 shadow-xs divide-y divide-slate-100">
          {displayedExperiences.map((exp) => (
            <div
              key={exp.id}
              className="p-3 sm:p-4 flex items-center gap-4 transition-colors hover:bg-slate-50/70 rounded-xl"
            >
              {/* Custom Logo Container styled like authentic company badge */}
              <div
                className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0 border border-slate-200/70 p-1 text-center select-none shadow-2xs ${exp.logoBg}`}
              >
                <span className="font-bold text-[10px] tracking-tight leading-tight uppercase">
                  {exp.logoText}
                </span>
                {exp.logoSub && (
                  <span className="text-[7.5px] opacity-75 leading-tight">
                    {exp.logoSub}
                  </span>
                )}
              </div>

              {/* Role Title and Company / Period line with bullet dot */}
              <div className="min-w-0 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                  {exp.role}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5 truncate flex items-center gap-1.5 flex-wrap">
                  <span className="text-slate-600 font-medium">{exp.company}</span>
                  <span className="text-slate-400">·</span>
                  <span>{exp.period}</span>
                </p>
              </div>

              {exp.isCurrent && (
                <span className="hidden sm:inline-flex text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 shrink-0">
                  Saat ini
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. SEKSI SERTIFIKASI & LISENSI (Exact from Screenshot 2) */}
      <section id="sertifikasi" className="scroll-mt-24">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Sertifikasi & lisensi
          </h2>
          <button
            onClick={() => setCertExpanded(!certExpanded)}
            className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <span>{certExpanded ? 'View less' : 'View more'}</span>
            {certExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl p-2 sm:p-3 shadow-xs divide-y divide-slate-100">
          {displayedCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-3 sm:p-4 flex items-center justify-between gap-4 transition-colors hover:bg-slate-50/70 rounded-xl"
            >
              <div className="flex items-center gap-4">
                {/* Blue certification badge icon matching screenshot */}
                <div className="w-12 h-12 rounded-xl bg-blue-50/90 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-2xs">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v12h16V6H4zm14 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 0 1 2 2h-4a4 4 0 0 1 2-2zM6 8h7v2H6V8zm0 4h5v2H6v-2z" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                    {cert.title}
                  </h3>
                  {cert.issuer && (
                    <p className="text-xs text-slate-500 mt-0.5">
                      {cert.issuer}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={() => onOpenVerifyModal(cert.code)}
                className="text-xs font-medium text-slate-600 hover:text-slate-950 px-2.5 py-1 bg-slate-50 hover:bg-slate-100 rounded-md border border-slate-200/80 transition-colors shrink-0"
              >
                Detail
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEKSI PENDIDIKAN (Exact from Screenshot 2) */}
      <section id="pendidikan" className="scroll-mt-24">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Pendidikan
          </h2>
          <button
            onClick={() => setEduExpanded(!eduExpanded)}
            className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <span>{eduExpanded ? 'View less' : 'View more'}</span>
            {eduExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl p-2 sm:p-3 shadow-xs">
          {displayedEdu.map((edu) => (
            <div
              key={edu.id}
              className="p-3 sm:p-4 flex items-center gap-4 transition-colors hover:bg-slate-50/70 rounded-xl"
            >
              {/* Perbanas Institute Logo representation */}
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center p-1 shrink-0 text-center shadow-2xs">
                <div className="w-3.5 h-3.5 bg-gradient-to-tr from-emerald-500 to-sky-500 rounded-xs mb-0.5"></div>
                <span className="text-[7.5px] font-bold text-slate-800 leading-tight">PERBANAS</span>
                <span className="text-[6.5px] text-slate-500 leading-none">INSTITUTE</span>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {edu.degree}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {edu.institution} <span className="mx-1">·</span> {edu.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SEKSI LATAR BELAKANG (Exact from Screenshot 4) */}
      <section id="latar-belakang" className="scroll-mt-24">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-3">
          Latar belakang
        </h2>

        {/* Structured Card with horizontal divider rows matching Screenshot 4 */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-xs divide-y divide-slate-100">
          
          {/* Row 1: Kapabilitas */}
          <div className="py-4.5 first:pt-1 flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-sm font-normal text-slate-800 w-36 shrink-0">
              Kapabilitas
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {profile.capabilities.map((cap, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-normal bg-white hover:border-slate-300 transition-colors shadow-2xs"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2: Keahlian */}
          <div className="py-4.5 flex flex-col sm:flex-row sm:items-start gap-3">
            <span className="text-sm font-normal text-slate-800 w-36 shrink-0 pt-1.5">
              Keahlian
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {profile.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-normal bg-white hover:border-slate-300 transition-colors shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Row 3: Industri */}
          <div className="py-4.5 flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-sm font-normal text-slate-800 w-36 shrink-0">
              Industri
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {profile.industries.map((ind, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-normal bg-white hover:border-slate-300 transition-colors shadow-2xs"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Row 4: Bahasa */}
          <div className="py-4.5 last:pb-1 flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-sm font-normal text-slate-800 w-36 shrink-0">
              Bahasa
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {profile.languages.map((lang, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-normal bg-white hover:border-slate-300 transition-colors shadow-2xs"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
