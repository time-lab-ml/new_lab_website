'use client'

import { useState } from 'react'

export interface TeamMember {
  name: string
  role: string
  imageUrl: string
  email?: string
  phone?: string
  website?: string
  linkedin?: string
  github?: string
  twitter?: string
  researchInterests?: string[]
  office?: string
}

interface BusinessCardProps {
  member: TeamMember
  size?: 'compact' | 'full'
  showBackByDefault?: boolean
}

export default function BusinessCard({ member, size = 'compact', showBackByDefault = false }: BusinessCardProps) {
  const [isFlipped, setIsFlipped] = useState(showBackByDefault)
  
  const isCompact = size === 'compact'

  // 尺寸配置
  const cardSize = isCompact ? 'w-[340px] h-[200px]' : 'w-[480px] h-[300px]'
  const photoSize = isCompact ? 'w-20 h-20 rounded-xl' : 'w-32 h-32 rounded-2xl'
  const photoGlow = isCompact ? '-inset-1 rounded-xl blur-sm' : '-inset-1.5 rounded-2xl blur-md'
  const padding = isCompact ? 'p-5' : 'p-8'
  const gap = isCompact ? 'gap-4' : 'gap-6'
  const nameSize = isCompact ? 'text-lg' : 'text-2xl'
  const roleSize = isCompact ? 'text-xs' : 'text-sm'
  const labTextSize = isCompact ? 'text-[10px]' : 'text-sm'
  const logoSize = isCompact ? 'w-8 h-8 rounded-lg text-xs' : 'w-12 h-12 rounded-xl text-lg'
  const decorTop = isCompact ? 'w-28 h-28' : 'w-40 h-40'
  const decorBottom = isCompact ? 'w-20 h-20' : 'w-28 h-28'
  const stripHeight = isCompact ? 'h-1' : 'h-1.5'

  // 背面配置
  const backTitleSize = isCompact ? 'text-xl' : 'text-3xl'
  const backSubtitleSize = isCompact ? 'text-xs' : 'text-sm'
  const backInfoSize = isCompact ? 'text-[10px]' : 'text-sm'
  const backCircle1 = isCompact ? 'w-14 h-14' : 'w-24 h-24'
  const backCircle2 = isCompact ? 'w-20 h-20' : 'w-32 h-32'
  const backCircle3 = isCompact ? 'w-36 h-36' : 'w-56 h-56'
  const socialSize = isCompact ? 'w-7 h-7 text-[10px]' : 'w-10 h-10 text-xs'
  const tagSize = isCompact ? 'px-2 py-0.5 text-[9px]' : 'px-3 py-1 text-xs'

  return (
    <div 
      className={`perspective-1000 ${cardSize} cursor-pointer`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* 正面 */}
        <div className="absolute inset-0 backface-hidden">
          <div className={`relative w-full h-full bg-gradient-to-br from-surface-container-lowest via-surface-container-low to-surface-container rounded-2xl overflow-hidden border border-outline-variant/30 ${
            isCompact 
              ? 'shadow-[0_15px_40px_rgba(45,106,69,0.12),0_8px_16px_rgba(0,0,0,0.08)]' 
              : 'shadow-[0_30px_70px_rgba(45,106,69,0.2),0_20px_40px_rgba(0,0,0,0.15)]'
          }`}>
            {/* 裝飾性背景元素 */}
            <div className={`absolute top-0 right-0 ${decorTop} bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full`} />
            <div className={`absolute bottom-0 left-0 ${decorBottom} bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full`} />
            
            {/* 頂部裝飾線 */}
            <div className={`absolute top-0 left-0 right-0 ${stripHeight} bg-gradient-to-r from-primary via-secondary to-tertiary`} />
            
            <div className={`relative h-full ${padding} flex ${gap}`}>
              {/* 照片區域 */}
              <div className="shrink-0 flex items-center">
                <div className="relative">
                  <div className={`absolute ${photoGlow} bg-gradient-to-br from-primary to-secondary opacity-30`} />
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className={`relative ${photoSize} object-cover shadow-lg ring-2 ring-surface-container-lowest`}
                  />
                </div>
              </div>
              
              {/* 資訊區域 */}
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <h2 className={`${nameSize} font-bold text-on-surface tracking-tight truncate`}>
                  {member.name}
                </h2>
                <p className={`${roleSize} font-semibold text-primary mt-1`}>
                  {member.role}
                </p>
                <div className={`${isCompact ? 'mt-2' : 'mt-4'} flex items-center gap-2`}>
                  <div className="h-px flex-1 bg-gradient-to-r from-outline-variant to-transparent" />
                </div>
                <p className={`${labTextSize} text-on-surface-variant ${isCompact ? 'mt-1.5' : 'mt-3'} font-medium tracking-wide`}>
                  TIME Lab
                </p>
                {/* 只在完整模式顯示 email */}
                {!isCompact && member.email && (
                  <p className="text-xs text-on-surface-variant/80 mt-1.5 truncate">
                    {member.email}
                  </p>
                )}
              </div>

              {/* 右下角 Logo 區域 */}
              <div className={`absolute ${isCompact ? 'bottom-3 right-3' : 'bottom-5 right-5'}`}>
                <div className={`${logoSize} bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center shadow-inner`}>
                  <span className="text-primary font-bold">T</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 背面 */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className={`relative w-full h-full bg-gradient-to-br from-primary via-primary to-secondary rounded-2xl overflow-hidden ${
            isCompact 
              ? 'shadow-[0_15px_40px_rgba(45,106,69,0.18),0_8px_16px_rgba(0,0,0,0.12)]' 
              : 'shadow-[0_30px_70px_rgba(45,106,69,0.28),0_20px_40px_rgba(0,0,0,0.2)]'
          }`}>
            {/* 裝飾性圖案 */}
            <div className="absolute inset-0 opacity-10">
              <div className={`absolute ${isCompact ? 'top-3 left-3' : 'top-6 left-6'} ${backCircle1} border-2 border-on-primary rounded-full`} />
              <div className={`absolute ${isCompact ? 'bottom-3 right-3' : 'bottom-6 right-6'} ${backCircle2} border-2 border-on-primary rounded-full`} />
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${backCircle3} border border-on-primary rounded-full`} />
            </div>

            <div className={`relative h-full ${padding} flex flex-col justify-center items-center text-center`}>
              <h3 className={`${backTitleSize} font-bold text-on-primary tracking-tight`}>
                TIME Lab
              </h3>
              <p className={`text-on-primary/80 ${backSubtitleSize} mt-1`}>
                Research Laboratory
              </p>
              
              {/* 聯絡資訊 - 完整模式顯示更多 */}
              <div className={`${isCompact ? 'mt-3 space-y-0.5' : 'mt-5 space-y-1.5'}`}>
                {member.office && (
                  <p className={`text-on-primary/90 ${backInfoSize}`}>
                    📍 {member.office}
                  </p>
                )}
                {member.email && (
                  <p className={`text-on-primary/90 ${backInfoSize}`}>
                    ✉️ {member.email}
                  </p>
                )}
                {/* 只在完整模式顯示電話和網站 */}
                {!isCompact && member.phone && (
                  <p className={`text-on-primary/90 ${backInfoSize}`}>
                    📞 {member.phone}
                  </p>
                )}
                {!isCompact && member.website && (
                  <p className={`text-on-primary/90 ${backInfoSize}`}>
                    🌐 {member.website}
                  </p>
                )}
              </div>

              {/* 社群連結 */}
              {(member.linkedin || member.github || member.twitter) && (
                <div className={`${isCompact ? 'mt-3' : 'mt-5'} flex gap-2`}>
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${socialSize} rounded-full bg-on-primary/20 flex items-center justify-center hover:bg-on-primary/30 transition-colors`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-on-primary font-medium">in</span>
                    </a>
                  )}
                  {member.github && (
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${socialSize} rounded-full bg-on-primary/20 flex items-center justify-center hover:bg-on-primary/30 transition-colors`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-on-primary font-medium">GH</span>
                    </a>
                  )}
                  {member.twitter && (
                    <a 
                      href={member.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${socialSize} rounded-full bg-on-primary/20 flex items-center justify-center hover:bg-on-primary/30 transition-colors`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-on-primary font-medium">X</span>
                    </a>
                  )}
                </div>
              )}

              {/* 研究興趣標籤 - 只在完整模式顯示 */}
              {!isCompact && member.researchInterests && member.researchInterests.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-1.5 justify-center max-w-[380px]">
                  {member.researchInterests.slice(0, 4).map((interest, idx) => (
                    <span 
                      key={idx}
                      className={`${tagSize} bg-on-primary/20 text-on-primary rounded-full`}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              )}

              <p className={`absolute ${isCompact ? 'bottom-2' : 'bottom-3'} text-on-primary/50 text-[10px]`}>
                Click to flip
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
