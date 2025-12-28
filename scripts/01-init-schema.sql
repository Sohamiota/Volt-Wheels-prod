-- Create companies table
CREATE TABLE IF NOT EXISTS companies (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  logo_url VARCHAR(500),
  color_primary VARCHAR(7),
  color_secondary VARCHAR(7),
  website VARCHAR(255),
  phone VARCHAR(20),
  email VARCHAR(255),
  address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id SERIAL PRIMARY KEY,
  company_id INTEGER NOT NULL REFERENCES companies(id),
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  company_name VARCHAR(255),
  message TEXT,
  project_type VARCHAR(100),
  budget_range VARCHAR(50),
  timeline VARCHAR(50),
  status VARCHAR(50) DEFAULT 'new',
  assigned_to VARCHAR(100),
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create call logs table
CREATE TABLE IF NOT EXISTS call_logs (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER NOT NULL REFERENCES leads(id),
  phone_number VARCHAR(20) NOT NULL,
  call_type VARCHAR(20),
  duration_seconds INTEGER,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  company_id INTEGER NOT NULL REFERENCES companies(id),
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert companies data
INSERT INTO companies (slug, name, description, color_primary, color_secondary, phone, email)
VALUES 
  ('volt-wheels', 'Volt Wheels', 'EV Mobility Solutions & Charging Infrastructure', '#0066FF', '#00D9FF', '+91 XXXX-XXXX-XX', 'sales@voltwheels.com'),
  ('srs-enterprise', 'SRS Enterprise', 'Power Distribution & Renewable Energy Systems', '#1DB954', '#1ED760', '+91 XXXX-XXXX-XX', 'sales@srsent.com'),
  ('nrg-future', 'NRG Future', 'Energy Solutions & Smart Grid Technology', '#FF6B35', '#FFB347', '+91 XXXX-XXXX-XX', 'sales@nrgfuture.com');

-- Create indexes for faster queries
CREATE INDEX idx_leads_company ON leads(company_id);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created ON leads(created_at DESC);
CREATE INDEX idx_call_logs_lead ON call_logs(lead_id);
