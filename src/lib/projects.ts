// Single source of truth for the three featured projects.
// Used by the Bento grid on home and the per-project page metadata.

import type { Locale } from './i18n';

export type ProjectSlug = 'mems-optical-switch' | 'rail-to-rail-comparator' | 'ls-buffer-opamp';

export interface ProjectMeta {
  slug: ProjectSlug;
  date: string;
  course: string;
  team: 'individual' | 'team2' | 'team3';
  specs: string[];
  bentoSize: 'wide' | 'normal';
  accent: string;
}

export const projects: ProjectMeta[] = [
  {
    slug: 'mems-optical-switch',
    date: '2025/10',
    course: "Master's Thesis (UNSW ELEC4951)",
    team: 'individual',
    specs: ['MEMS', '20–80 V', 'COMSOL Multiphysics', 'Electrostatic'],
    bentoSize: 'wide',
    accent: '#2A9098',
  },
  {
    slug: 'rail-to-rail-comparator',
    date: '2024/11',
    course: 'UNSW ELEC9701',
    team: 'team3',
    specs: ['FreePDK 45nm', '0.9 V', 'Cadence Virtuoso', 'Monte Carlo'],
    bentoSize: 'normal',
    accent: '#3FA89B',
  },
  {
    slug: 'ls-buffer-opamp',
    date: '2024/11',
    course: 'UNSW ELEC4602',
    team: 'team2',
    specs: ['FreePDK 45nm', 'Two-stage', 'Cadence', 'Level Shift'],
    bentoSize: 'normal',
    accent: '#5EBDC4',
  },
];

export function getProject(slug: ProjectSlug): ProjectMeta {
  const p = projects.find((p) => p.slug === slug);
  if (!p) throw new Error(`Project not found: ${slug}`);
  return p;
}

export function adjacent(slug: ProjectSlug): { prev?: ProjectSlug; next?: ProjectSlug } {
  const idx = projects.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? projects[idx - 1].slug : undefined,
    next: idx < projects.length - 1 ? projects[idx + 1].slug : undefined,
  };
}

export function teamLabel(team: ProjectMeta['team'], locale: Locale): string {
  const map: Record<Locale, Record<ProjectMeta['team'], string>> = {
    'zh-TW': {
      individual: '個人專案',
      team2: '兩人組',
      team3: '三人組',
    },
    en: {
      individual: 'Solo project',
      team2: 'Team of 2',
      team3: 'Team of 3',
    },
  };
  return map[locale][team];
}
