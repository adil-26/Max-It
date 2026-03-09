'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function EmployerDashboard() {
  const router = useRouter();
  const [employer, setEmployer] = useState<any>(null);
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployerData = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          router.push('/auth/login');
          return;
        }

        // Get employer profile
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .eq('role', 'employer')
          .single();

        if (!profileData) {
          router.push('/dashboard/setup');
          return;
        }

        setEmployer(profileData);

        // Get employer's jobs
        const { data: jobsData } = await supabase
          .from('jobs')
          .select('*, employer:profiles(company_name)')
          .eq('employer_id', profileData.id)
          .order('created_at', { ascending: false });

        setJobs(jobsData || []);
      } catch (error) {
        console.error('Error fetching employer data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployerData();
  }, [router]);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!employer) {
    return <div className="p-8">Access denied</div>;
  }

  return (
    <div className="space-y-8 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{employer.company_name}</h1>
          <p className="text-muted-foreground mt-2">{employer.industry} • {employer.location}</p>
        </div>
        <Link href="/dashboard/jobs/new">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Post New Job
          </Button>
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <p className="text-sm font-medium text-muted-foreground">Active Jobs</p>
          <p className="text-3xl font-bold mt-2">{jobs.filter(j => j.status === 'active').length}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm font-medium text-muted-foreground">Total Applications</p>
          <p className="text-3xl font-bold mt-2">{jobs.reduce((sum, j) => sum + (j.applications_count || 0), 0)}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm font-medium text-muted-foreground">Total Views</p>
          <p className="text-3xl font-bold mt-2">{jobs.reduce((sum, j) => sum + (j.views_count || 0), 0)}</p>
        </Card>
      </div>

      {/* Jobs List */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Job Postings</h2>
        {jobs.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground mb-4">No jobs posted yet</p>
            <Link href="/dashboard/jobs/new">
              <Button>Post Your First Job</Button>
            </Link>
          </Card>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <Card key={job.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Link href={`/jobs/${job.id}`}>
                      <h3 className="text-xl font-semibold hover:text-primary cursor-pointer">{job.title}</h3>
                    </Link>
                    <p className="text-muted-foreground mt-1">{job.location} • {job.employment_type}</p>
                    <div className="flex gap-4 mt-4 text-sm">
                      <span className="text-muted-foreground">Applications: {job.applications_count || 0}</span>
                      <span className="text-muted-foreground">Views: {job.views_count || 0}</span>
                      <span className={`font-medium ${job.status === 'active' ? 'text-green-600' : 'text-gray-600'}`}>
                        {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/dashboard/jobs/${job.id}/edit`}>
                      <Button variant="outline" size="sm">Edit</Button>
                    </Link>
                    <Link href={`/dashboard/jobs/${job.id}/applications`}>
                      <Button variant="outline" size="sm">Applications</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
