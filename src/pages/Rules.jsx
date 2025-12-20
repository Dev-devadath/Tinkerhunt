import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Rules() {
  const navigate = useNavigate();
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <div style={{
      backgroundColor: 'white',
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: 'monospace',
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
      }}>
        <h1 style={{
          fontSize: '32px',
          textAlign: 'center',
          marginBottom: '10px',
        }}>
          Treasure Hunt Rules
        </h1>

        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
        }}>
          <button
            onClick={() => setShowFAQ(false)}
            style={{
              padding: '8px 20px',
              fontSize: '14px',
              backgroundColor: !showFAQ ? '#f0f0f0' : 'white',
              border: '1px solid #ddd',
              borderRadius: '0',
              cursor: 'pointer',
              fontFamily: 'monospace',
              marginRight: '10px',
            }}
          >
            Rules
          </button>
          <button
            onClick={() => setShowFAQ(true)}
            style={{
              padding: '8px 20px',
              fontSize: '14px',
              backgroundColor: showFAQ ? '#f0f0f0' : 'white',
              border: '1px solid #ddd',
              borderRadius: '0',
              cursor: 'pointer',
              fontFamily: 'monospace',
            }}
          >
            FAQ
          </button>
        </div>

        {!showFAQ ? (
          <div>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
              This hunt runs for 2 days. You can start anytime during the window and finish at your own pace. No rush, but speed matters.
            </p>

            <h3 style={{ fontSize: '18px', marginTop: '30px', marginBottom: '15px' }}>
              • The hunt is QR-code based. Every clue leads you to a QR.
            </h3>
            <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>
              • Scan the QR to unlock the next step.
            </h3>
            <h3 style={{ fontSize: '18px', marginBottom: '30px' }}>
              • You must complete the hunt in order. Skipping steps breaks the game.
            </h3>

            <h2 style={{ fontSize: '20px', marginTop: '40px', marginBottom: '15px' }}>
              About rewards
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px' }}>
              • Only the first few people to complete the entire hunt get the goodies.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
              • Rewards are limited. Faster solvers win.
            </p>

            <h2 style={{ fontSize: '20px', marginTop: '40px', marginBottom: '15px' }}>
              Fair play matters
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px' }}>
              • Don't share QR links, answers, screenshots, or locations with others.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px' }}>
              • Don't post clues or tactics on Discord, WhatsApp, Instagram, or anywhere public.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
              • Teaming up beyond casual discussion ruins the fun. Play fair.
            </p>

            <h2 style={{ fontSize: '20px', marginTop: '40px', marginBottom: '15px' }}>
              What not to do
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px' }}>
              • Don't damage posters, QR codes, or spaces.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px' }}>
              • Don't remove, cover, or move clues.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px' }}>
              • Don't brute-force or try to exploit the system.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
              If something breaks accidentally, inform the host.
            </p>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ fontSize: '17px', marginBottom: '8px' }}>
                When can I start?
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                Anytime during the 2-day window.
              </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ fontSize: '17px', marginBottom: '8px' }}>
                Do I need to finish in one go?
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                No. You can pause and continue later as long as the hunt is live.
              </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ fontSize: '17px', marginBottom: '8px' }}>
                Can I do this with friends?
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                You can discuss ideas, but do not share exact answers, QR links, or locations. Each person should scan and solve on their own.
              </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ fontSize: '17px', marginBottom: '8px' }}>
                What if I find a QR before a clue?
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                Ignore it. Scan only when the game leads you there. Order matters.
              </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ fontSize: '17px', marginBottom: '8px' }}>
                What happens if I share clues or answers?
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                Disqualification. No exceptions.
              </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ fontSize: '17px', marginBottom: '8px' }}>
                What do I need to participate?
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                A phone with a camera and internet.
              </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ fontSize: '17px', marginBottom: '8px' }}>
                What if a QR doesn't scan?
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                Adjust lighting or angle. If it still fails, contact the host.
              </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ fontSize: '17px', marginBottom: '8px' }}>
                Is there an entry fee?
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                No. Free to play.
              </p>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ fontSize: '17px', marginBottom: '8px' }}>
                How will winners be announced?
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                Winners will be contacted after verification.
              </p>
            </div>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <button
            onClick={() => navigate('/start')}
            style={{
              padding: '10px 30px',
              fontSize: '16px',
              backgroundColor: '#f0f0f0',
              border: '2px outset #ddd',
              borderRadius: '0',
              cursor: 'pointer',
              fontFamily: 'monospace',
              boxShadow: '2px 2px 0px rgba(0,0,0,0.2)',
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.border = '2px inset #ddd';
              e.currentTarget.style.boxShadow = 'inset 1px 1px 2px rgba(0,0,0,0.2)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.border = '2px outset #ddd';
              e.currentTarget.style.boxShadow = '2px 2px 0px rgba(0,0,0,0.2)';
            }}
          >
            Back to Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rules;
