'use client';

import React from 'react';
import { QuestionnaireWizard } from '@/components/guidance/questionnaire-wizard';
import { useRouter } from 'next/navigation';

export default function QuestionnairePage() {
  const router = useRouter();

  const handleComplete = (data: any) => {
    // Save to local storage for offline session sync
    if (typeof window !== 'undefined') {
      localStorage.setItem('careerdna_vector', JSON.stringify(data));
    }
    router.push('/student/recommendations');
  };

  return (
    <div className="py-4">
      <QuestionnaireWizard onComplete={handleComplete} />
    </div>
  );
}
