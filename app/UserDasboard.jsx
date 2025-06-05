import React, { useState } from 'react';
import { useAuth } from '@/app/AuthContext';

const UserDashboard = () => {
  const { user } = useAuth();
  const [cvFile, setCvFile] = useState('');

  // Mock jobs data - replace with your actual data source
  const [jobs] = useState([
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'full-time',
      salary: '$120,000 - $150,000',
      description: 'We are looking for an experienced Frontend Developer to join our dynamic team...'
    },
    {
      id: '2',
      title: 'UX/UI Designer',
      company: 'Design Studio',
      location: 'New York, NY',
      type: 'full-time',
      salary: '$80,000 - $100,000',
      description: 'Join our creative team as a UX/UI Designer and help shape amazing user experiences...'
    },
    {
      id: '3',
      title: 'Backend Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      type: 'remote',
      salary: '$90,000 - $120,000',
      description: 'We need a skilled Backend Developer to build scalable APIs and services...'
    }
  ]);

  const [applications, setApplications] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvFile(file.name);
      alert(`${file.name} uploaded successfully`);
    }
  };

  const handleApply = (jobId) => {
    if (!user) return;
    
    if (!cvFile) {
      alert('Please upload your CV before applying');
      return;
    }

    const hasAlreadyApplied = applications.some(app => app.jobId === jobId);
    if (hasAlreadyApplied) {
      alert('You have already applied for this job');
      return;
    }

    const newApplication = {
      id: Date.now().toString(),
      jobId,
      userId: user.id,
      userName: `${user.firstName} ${user.lastName}`,
      userEmail: user.email,
      cvFile,
      appliedDate: new Date().toLocaleDateString(),
      status: 'pending'
    };

    setApplications([...applications, newApplication]);
    alert('Application submitted successfully');
  };

  const cardStyle = {
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '24px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
  };

  const buttonStyle = {
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500'
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#3b82f6',
    color: 'white'
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f3f4f6',
    color: '#374151',
    border: '1px solid #d1d5db'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
            Welcome back, {user?.firstName}!
          </h1>
          <p style={{ color: '#6b7280' }}>Manage your job applications and profile</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px' }}>
          {/* CV Upload Section */}
          <div>
            <div style={cardStyle}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Your CV</h3>
              <p style={{ color: '#6b7280', marginBottom: '16px' }}>Upload your CV to apply for jobs</p>
              
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                  CV File
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  style={{ 
                    width: '100%', 
                    padding: '8px 12px', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '6px' 
                  }}
                />
              </div>
              
              {cvFile && (
                <div style={{ color: '#059669', fontSize: '14px' }}>
                  ✓ {cvFile}
                </div>
              )}
            </div>

            {/* Application Stats */}
            <div style={cardStyle}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Application Stats</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Total Applications:</span>
                <span style={{ fontWeight: '600' }}>{applications.length}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Pending:</span>
                <span style={{ fontWeight: '600', color: '#d97706' }}>
                  {applications.filter(app => app.status === 'pending').length}
                </span>
              </div>
            </div>
          </div>

          {/* Available Jobs */}
          <div>
            <div style={cardStyle}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Available Jobs</h3>
              <p style={{ color: '#6b7280', marginBottom: '24px' }}>Browse and apply for open positions</p>
              
              <div>
                {jobs.map((job) => {
                  const hasApplied = applications.some(app => app.jobId === job.id);
                  return (
                    <div key={job.id} style={{ 
                      border: '1px solid #e5e7eb', 
                      borderRadius: '8px', 
                      padding: '16px', 
                      marginBottom: '16px' 
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <div>
                          <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>{job.title}</h4>
                          <p style={{ color: '#6b7280', marginBottom: '4px' }}>{job.company}</p>
                          <p style={{ fontSize: '14px', color: '#9ca3af' }}>{job.location} • {job.salary}</p>
                        </div>
                        <span style={{
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          backgroundColor: job.type === 'remote' ? '#dbeafe' : '#f3f4f6',
                          color: job.type === 'remote' ? '#1e40af' : '#374151'
                        }}>
                          {job.type.replace('-', ' ')}
                        </span>
                      </div>
                      
                      <p style={{ color: '#374151', fontSize: '14px', marginBottom: '16px' }}>{job.description}</p>
                      
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {hasApplied ? (
                          <span style={{
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            backgroundColor: '#dbeafe',
                            color: '#1e40af'
                          }}>
                            Applied
                          </span>
                        ) : (
                          <button
                            style={cvFile ? primaryButtonStyle : { ...primaryButtonStyle, opacity: 0.5, cursor: 'not-allowed' }}
                            onClick={() => handleApply(job.id)}
                            disabled={!cvFile}
                          >
                            Apply Now
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* My Applications */}
        {applications.length > 0 && (
          <div style={cardStyle}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>My Applications</h3>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>Track the status of your job applications</p>
            
            <div>
              {applications.map((application) => {
                const job = jobs.find(j => j.id === application.jobId);
                if (!job) return null;
                
                return (
                  <div key={application.id} style={{ 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '8px', 
                    padding: '16px', 
                    marginBottom: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>{job.title}</h4>
                      <p style={{ color: '#6b7280', marginBottom: '4px' }}>{job.company}</p>
                      <p style={{ fontSize: '14px', color: '#9ca3af' }}>Applied on {application.appliedDate}</p>
                    </div>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      backgroundColor: application.status === 'pending' ? '#fef3c7' : '#dbeafe',
                      color: application.status === 'pending' ? '#92400e' : '#1e40af'
                    }}>
                      {application.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
