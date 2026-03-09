'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function AdminDashboard() {
  const router = useRouter();
  const [admin, setAdmin] = useState<any>(null);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalJobs: 0,
    totalApplications: 0,
    totalLeads: 0
  });
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          router.push('/auth/login');
          return;
        }

        // Get admin profile
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .eq('role', 'admin')
          .single();

        if (!profileData) {
          router.push('/dashboard');
          return;
        }

        setAdmin(profileData);

        // Get statistics
        const { count: usersCount } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });

        const { count: jobsCount } = await supabase
          .from('jobs')
          .select('*', { count: 'exact', head: true });

        const { count: applicationsCount } = await supabase
          .from('job_applications')
          .select('*', { count: 'exact', head: true });

        const { data: leadsData, count: leadsCount } = await supabase
          .from('contact_leads')
          .select('*', { count: 'exact' })
          .order('created_at', { ascending: false })
          .limit(10);

        setStats({
          totalUsers: usersCount || 0,
          totalJobs: jobsCount || 0,
          totalApplications: applicationsCount || 0,
          totalLeads: leadsCount || 0
        });

        setLeads(leadsData || []);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, [router]);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!admin) {
    return <div className="p-8">Access denied</div>;
  }

  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage platform users, jobs, and inquiries</p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <p className="text-sm font-medium text-muted-foreground">Total Users</p>
          <p className="text-3xl font-bold mt-2">{stats.totalUsers}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm font-medium text-muted-foreground">Active Jobs</p>
          <p className="text-3xl font-bold mt-2">{stats.totalJobs}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm font-medium text-muted-foreground">Applications</p>
          <p className="text-3xl font-bold mt-2">{stats.totalApplications}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm font-medium text-muted-foreground">Contact Leads</p>
          <p className="text-3xl font-bold mt-2">{stats.totalLeads}</p>
        </Card>
      </div>

      {/* Recent Leads */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Recent Contact Leads</h2>
          <Button variant="outline">View All</Button>
        </div>
        {leads.length === 0 ? (
          <Card className="p-8 text-center text-muted-foreground">
            No contact leads yet
          </Card>
        ) : (
          <div className="space-y-4">
            {leads.map((lead) => (
              <Card key={lead.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold">{lead.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{lead.email}</p>
                    {lead.company && (
                      <p className="text-sm text-muted-foreground">{lead.company}</p>
                    )}
                    <p className="text-sm mt-2 text-foreground line-clamp-2">{lead.message}</p>
                    <div className="flex gap-2 mt-3">
                      <span className="text-xs bg-muted px-2 py-1 rounded">
                        {lead.inquiry_type.replace('_', ' ').toUpperCase()}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        lead.status === 'new' ? 'bg-blue-100 text-blue-800' :
                        lead.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                        lead.status === 'qualified' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {lead.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
