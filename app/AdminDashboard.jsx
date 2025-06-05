
import React, { useState } from 'react';

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
    title: "Security Personnel",
    location: "Qatar",
    image: "/security.jpg",
    salary: "QAR 1600-1800",
    category: "Security",
    requirements: "Valid Passport, Good Conduct",
    type: "Full-time",
    gender: "Male",
    forHiring: true
    },
    {
      id: 2,
    title: "Cleaner",
    location: "Qatar",
    image: "/cleaner.jpg?height=400&width=600",
    salary: "QAR 1000 + Allowances",
    category: "Maintenance",
    requirements: "Valid Passport, Good Conduct",
    type: "Full-time",
    gender: "Both",
    forHiring: true,
    }
  ]);

  const [applications] = useState([
    {
      id: '1',
      jobId: '1',
      userName: 'John Doe',
      userEmail: 'john@example.com',
      cvFile: 'john_doe_cv.pdf',
      appliedDate: '2024-01-15',
      status: 'pending'
    },
    {
      id: '2',
      jobId: '2',
      userName: 'Jane Smith',
      userEmail: 'jane@example.com',
      cvFile: 'jane_smith_cv.pdf',
      appliedDate: '2024-01-14',
      status: 'reviewed'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    location: '',
    type: 'full-time',
    salary: '',
    description: '',
    requirements: ''
  });

  const handleAddJob = (e) => {
    e.preventDefault();
    
    if (!newJob.title || !newJob.company || !newJob.description) {
      alert('Please fill in all required fields');
      return;
    }

    const job = {
      id: Date.now().toString(),
      ...newJob,
      requirements: newJob.requirements.split(',').map(req => req.trim()).filter(req => req)
    };

    setJobs([...jobs, job]);
    alert('Job added successfully');

    setNewJob({
      title: '',
      company: '',
      location: '',
      type: 'full-time',
      salary: '',
      description: '',
      requirements: ''
    });
    setShowAddForm(false);
  };

  const handleRemoveJob = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId));
    alert('Job removed successfully');
  };

  const getJobApplications = (jobId) => {
    return applications.filter(app => app.jobId === jobId);
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

  const dangerButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ef4444',
    color: 'white'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    marginBottom: '16px'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
            Admin Dashboard
          </h1>
          <p style={{ color: '#6b7280' }}>Manage job listings and applications</p>
        </div>

        {/* Stats Overview */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
          <div style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280' }}>Total Jobs</h3>
            </div>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{jobs.length}</div>
          </div>
          <div style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280' }}>Total Applications</h3>
            </div>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{applications.length}</div>
          </div>
          <div style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280' }}>Pending Reviews</h3>
            </div>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
              {applications.filter(app => app.status === 'pending').length}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {/* Job Management */}
          <div>
            <div style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>Job Listings</h3>
                  <p style={{ color: '#6b7280' }}>Manage your job postings</p>
                </div>
                <button
                  style={primaryButtonStyle}
                  onClick={() => setShowAddForm(!showAddForm)}
                >
                  + Add Job
                </button>
              </div>

              {showAddForm && (
                <form onSubmit={handleAddJob} style={{ 
                  padding: '16px', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px', 
                  backgroundColor: '#f9fafb',
                  marginBottom: '24px'
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>
                        Job Title*
                      </label>
                      <input
                        style={inputStyle}
                        value={newJob.title}
                        onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>
                        Company*
                      </label>
                      <input
                        style={inputStyle}
                        value={newJob.company}
                        onChange={(e) => setNewJob({...newJob, company: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>
                        Location
                      </label>
                      <input
                        style={inputStyle}
                        value={newJob.location}
                        onChange={(e) => setNewJob({...newJob, location: e.target.value})}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>
                        Salary
                      </label>
                      <input
                        style={inputStyle}
                        value={newJob.salary}
                        onChange={(e) => setNewJob({...newJob, salary: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>
                      Job Type
                    </label>
                    <select 
                      style={inputStyle}
                      value={newJob.type} 
                      onChange={(e) => setNewJob({...newJob, type: e.target.value})}
                    >
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                      <option value="contract">Contract</option>
                      <option value="remote">Remote</option>
                    </select>
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>
                      Description*
                    </label>
                    <textarea
                      style={{ ...inputStyle, minHeight: '80px' }}
                      value={newJob.description}
                      onChange={(e) => setNewJob({...newJob, description: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>
                      Requirements (comma-separated)
                    </label>
                    <input
                      style={inputStyle}
                      value={newJob.requirements}
                      onChange={(e) => setNewJob({...newJob, requirements: e.target.value})}
                      placeholder="React, TypeScript, 3+ years experience"
                    />
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button type="submit" style={primaryButtonStyle}>Add Job</button>
                    <button 
                      type="button" 
                      style={{ ...buttonStyle, backgroundColor: '#f3f4f6', color: '#374151' }}
                      onClick={() => setShowAddForm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              <div>
                {jobs.map((job) => {
                  const jobApplications = getJobApplications(job.id);
                  return (
                    <div key={job.id} style={{ 
                      border: '1px solid #e5e7eb', 
                      borderRadius: '8px', 
                      padding: '16px', 
                      marginBottom: '12px' 
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>{job.title}</h4>
                          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>{job.company}</p>
                          <p style={{ fontSize: '12px', color: '#9ca3af' }}>{job.location} • {job.salary}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            backgroundColor: '#f3f4f6',
                            color: '#374151'
                          }}>
                            {jobApplications.length} applications
                          </span>
                          <button
                            style={{ ...dangerButtonStyle, padding: '4px 8px', fontSize: '12px' }}
                            onClick={() => handleRemoveJob(job.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Applications Management */}
          <div>
            <div style={cardStyle}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Recent Applications</h3>
              <p style={{ color: '#6b7280', marginBottom: '24px' }}>Review and manage job applications</p>
              
              <div>
                {applications.slice(0, 10).map((application) => {
                  const job = jobs.find(j => j.id === application.jobId);
                  if (!job) return null;
                  
                  return (
                    <div key={application.id} style={{ 
                      border: '1px solid #e5e7eb', 
                      borderRadius: '8px', 
                      padding: '16px', 
                      marginBottom: '16px' 
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>{application.userName}</h4>
                          <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>{application.userEmail}</p>
                          <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '4px' }}>Applied for: {job.title}</p>
                          <p style={{ fontSize: '12px', color: '#9ca3af' }}>CV: {application.cvFile}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            backgroundColor: application.status === 'pending' ? '#fef3c7' : '#dbeafe',
                            color: application.status === 'pending' ? '#92400e' : '#1e40af'
                          }}>
                            {application.status}
                          </span>
                          <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>{application.appliedDate}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                
                {applications.length === 0 && (
                  <p style={{ textAlign: 'center', color: '#9ca3af', padding: '32px 0' }}>No applications yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
