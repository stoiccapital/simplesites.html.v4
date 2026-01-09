import React from 'react';
import { components, spacing } from '../../../../../config/design-system';

/**
 * Mock #3: Deployment Ready
 * Complete deployment process with source code included
 * Calm, operational, production-ready aesthetic
 */
export function DeploymentMock() {
  const steps = ['Build', 'Check', 'Deploy', 'Live'];

  return (
    <div className="flex flex-col h-full min-h-0 overflow-hidden">
      {/* Inner scroll area: All content that can exceed height */}
      <div 
        className="flex-1 min-h-0 overflow-y-auto overscroll-contain pr-1"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="flex flex-col gap-y-8">
          {/* Top status row: 4 equal step pills - wrap on mobile, hide connectors on mobile */}
          <div className="flex flex-wrap items-center gap-3">
            {steps.map((step, index) => {
              const isLive = index === 3; // Final "Live" step
              return (
                <React.Fragment key={step}>
                  <div className={`${components.button.radius} ${
                    isLive
                      ? 'bg-cta-bg text-cta-text'
                      : 'bg-bg-neutral border border-border-subtle text-text-muted'
                  } px-4 py-2 text-xs font-medium shrink-0 whitespace-nowrap`}>
                    {step}
                  </div>
                  {/* Hide connectors on mobile (below md breakpoint) */}
                  {index < 3 && (
                    <div className="h-px bg-border-subtle w-3 hidden md:block shrink-0"></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Primary content block: Bundle card */}
          <div className={`${components.card.base} ${spacing.card.px} ${spacing.card.py} bg-bg-default min-w-0`}>
            {/* 5-6 horizontal line rows representing files/modules */}
            <div className="flex flex-col gap-y-3">
              {[1, 2, 3, 4, 5, 6].map((i) => {
                const isAccented = i === 1; // Optionally accent first row
                return (
                  <div key={i} className="flex items-center gap-3 min-w-0">
                    <div className={`bg-text-muted h-2 ${components.surface.radius} w-3 shrink-0`}></div>
                    <div className={`${
                      isAccented ? 'bg-cta-bg' : 'bg-text-secondary'
                    } h-2.5 ${components.surface.radius} ${
                      i === 1 ? 'w-full' : 
                      i === 2 ? 'w-11/12' : 
                      i === 3 ? 'w-10/12' : 
                      i === 4 ? 'w-9/12' : 
                      i === 5 ? 'w-8/12' : 
                      'w-7/12'
                    } min-w-0`}></div>
                  </div>
                );
              })}
            </div>

            {/* Secondary indicator: Source included - small, quiet, muted */}
            <div className="pt-4 border-t border-border-subtle">
              <div className={`${components.button.radius} bg-bg-neutral border border-border-subtle text-text-muted px-3 py-1.5 text-xs font-medium inline-block`}>
                Source included
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

