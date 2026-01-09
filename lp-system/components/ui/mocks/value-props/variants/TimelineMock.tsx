import React from 'react';
import { components, spacing, typography } from '../../../../../config/design-system';

/**
 * Mock #4: Timeline (How it works - 1 week)
 * Structured 1-week process from kickoff to launch
 * Operational clarity, predictable stages
 */
export function TimelineMock() {
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const phases = [
    { title: 'Kickoff', detail: 'Scope defined' },
    { title: 'Build', detail: 'Implementation' },
    { title: 'Launch', detail: 'Deployment ready' },
  ];

  return (
    <div className="flex flex-col h-full min-h-0 overflow-hidden">
      {/* Inner scroll area: All content that can exceed height */}
      <div 
        className="flex-1 min-h-0 overflow-y-auto overscroll-contain pr-1"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="flex flex-col gap-y-8">
          {/* Primary block: Week timeline - horizontal scroll on mobile, hide connectors on mobile */}
          <div className="flex items-center gap-3 overflow-x-auto min-w-0">
            {weekdays.map((day, index) => (
              <React.Fragment key={day}>
                <div className={`${components.button.radius} bg-bg-neutral border border-border-subtle text-text-muted px-3 py-2 ${typography.textXs} font-medium whitespace-nowrap shrink-0`}>
                  {day}
                </div>
                {/* Hide connectors on mobile (below md breakpoint) */}
                {index < weekdays.length - 1 && (
                  <div className="h-px bg-border-subtle w-2 shrink-0 hidden md:block"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Launch row - second row below weekdays */}
          <div className="flex items-center">
            <div className={`${components.button.radius} bg-cta-bg text-cta-text px-3 py-2 ${typography.textXs} font-medium whitespace-nowrap shrink-0`}>
              Launch
            </div>
          </div>

          {/* Secondary block: Phase cards - 3 stacked compact cards */}
          <div className="flex flex-col gap-y-2.5 min-w-0">
            {phases.map((phase, index) => {
              const isLaunch = index === 2;
              return (
                <div
                  key={phase.title}
                  className={`${components.card.base} ${spacing.card.px} ${spacing.card.py} ${
                    isLaunch ? 'bg-cta-bg' : 'bg-bg-default'
                  } min-w-0`}
                >
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className={`${typography.label} ${
                      isLaunch ? 'text-cta-text' : 'text-text-primary'
                    }`}>
                      {phase.title}
                    </div>
                    <div className={`${typography.textXs} ${
                      isLaunch ? 'text-cta-text opacity-75' : 'text-text-secondary'
                    }`}>
                      {phase.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

