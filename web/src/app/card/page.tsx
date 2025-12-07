'use client'

import { useState } from 'react'
import Link from 'next/link'
import teamData from '@/data/team.json'
import BusinessCard, { TeamMember } from '@/components/BusinessCard'

interface TeamData {
  leader: TeamMember[]
  phdStudents: TeamMember[]
  postgraduate: TeamMember[]
  undergraduate: TeamMember[]
  alumni: TeamMember[]
}

const data = teamData as TeamData

// 合併所有成員（不包含 alumni）
const allMembers = [
  ...data.leader,
  ...data.phdStudents,
  ...data.postgraduate,
  ...data.undergraduate,
]

// 從名字生成 slug
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/^(prof\.|dr\.|mr\.|ms\.|mrs\.)\s*/i, '') // 移除頭銜
    .replace(/[^a-z0-9]+/g, '') // 只保留字母和數字
}

export default function CardPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  const categories = [
    { id: 'all', label: 'All Members' },
    { id: 'leader', label: 'Leader' },
    { id: 'phd', label: 'PhD Students' },
    { id: 'postgraduate', label: 'Postgraduate' },
    { id: 'undergraduate', label: 'Undergraduate' },
  ]

  const getFilteredMembers = () => {
    switch (selectedCategory) {
      case 'leader':
        return data.leader
      case 'phd':
        return data.phdStudents
      case 'postgraduate':
        return data.postgraduate
      case 'undergraduate':
        return data.undergraduate
      default:
        return allMembers
    }
  }

  const filteredMembers = getFilteredMembers()

  return (
    <div className="min-h-screen bg-surface-dim py-12 px-4">
      {/* 頁面標題 */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-on-surface tracking-tight">
          TIME Lab Business Cards
        </h1>
        <p className="text-on-surface-variant mt-2">
          Click on a card to see more details
        </p>
      </div>

      {/* 分類篩選 */}
      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === cat.id
                ? 'bg-primary text-on-primary shadow-lg shadow-primary/30'
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 名片網格 */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {filteredMembers.map((member, index) => (
            <div key={`${member.name}-${index}`} className="flex flex-col items-center">
              <BusinessCard member={member} size="compact" />
              <Link 
                href={`/card/${generateSlug(member.name)}`}
                className="mt-3 text-xs text-primary hover:text-primary/80 transition-colors"
              >
                /card/{generateSlug(member.name)}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* 底部說明 */}
      <div className="text-center mt-12 text-on-surface-variant text-sm">
        <p>For conferences and networking events</p>
        <p className="mt-1 text-xs text-on-surface-variant/70">
          Click the link below each card to get the shareable URL
        </p>
      </div>
    </div>
  )
}
