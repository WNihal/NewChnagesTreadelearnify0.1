/*
  # Create Webinar Registrations Table

  1. New Tables
    - `webinar_registrations`
      - `id` (uuid, primary key) - Unique identifier for each registration
      - `name` (text, required) - Registrant's full name
      - `whatsapp_number` (text, required) - WhatsApp contact number
      - `email` (text, required) - Email address for communication
      - `city` (text, required) - City of residence
      - `market_experience` (text, required) - Level of market experience
      - `payment_status` (text, default 'pending') - Payment completion status
      - `razorpay_payment_id` (text, nullable) - Razorpay transaction ID
      - `razorpay_order_id` (text, nullable) - Razorpay order ID
      - `registration_date` (timestamptz, default now()) - Registration timestamp
      - `email_sent` (boolean, default false) - Track if confirmation email was sent
      - `created_at` (timestamptz, default now()) - Record creation timestamp
      - `updated_at` (timestamptz, default now()) - Record update timestamp

  2. Security
    - Enable RLS on `webinar_registrations` table
    - Add policy for public insert (registration form)
    - Add policy for admin read access (authenticated users only)

  3. Indexes
    - Index on email for faster lookups
    - Index on payment_status for admin filtering
    - Index on registration_date for chronological queries

  4. Important Notes
    - Public can INSERT their registration details
    - Only authenticated admin users can SELECT/UPDATE/DELETE
    - Email field is indexed for quick duplicate checks
    - Payment status tracks: 'pending', 'completed', 'failed'
*/

CREATE TABLE IF NOT EXISTS webinar_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  whatsapp_number text NOT NULL,
  email text NOT NULL,
  city text NOT NULL,
  market_experience text NOT NULL,
  payment_status text DEFAULT 'pending',
  razorpay_payment_id text,
  razorpay_order_id text,
  registration_date timestamptz DEFAULT now(),
  email_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_webinar_registrations_email ON webinar_registrations(email);
CREATE INDEX IF NOT EXISTS idx_webinar_registrations_payment_status ON webinar_registrations(payment_status);
CREATE INDEX IF NOT EXISTS idx_webinar_registrations_date ON webinar_registrations(registration_date DESC);

-- Enable Row Level Security
ALTER TABLE webinar_registrations ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to insert registrations
CREATE POLICY "Anyone can register for webinar"
  ON webinar_registrations
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy: Only authenticated users can view all registrations
CREATE POLICY "Authenticated users can view registrations"
  ON webinar_registrations
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Only authenticated users can update registrations
CREATE POLICY "Authenticated users can update registrations"
  ON webinar_registrations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Only authenticated users can delete registrations
CREATE POLICY "Authenticated users can delete registrations"
  ON webinar_registrations
  FOR DELETE
  TO authenticated
  USING (true);
