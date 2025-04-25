import { getDocs, collection, query, orderBy } from 'firebase/firestore';
import { db } from '@/firebase/client';
import InterviewCard from '@/components/InterviewCard';

async function getInterviewsFromDB() {
  const q = query(collection(db, 'interviews'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export default async function AllInterviewsPage() {
  const interviews = await getInterviewsFromDB();

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-5xl font-bold text-center mb-6 p-6">All Interviews</h1>

      {/* Server-side rendered list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {interviews.map((interview) => (
          <InterviewCard
            key={interview.id}
            interviewId={interview.id}
            role={interview.role}
            type={interview.type}
            techstack={interview.techstack}
            createdAt={interview.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
