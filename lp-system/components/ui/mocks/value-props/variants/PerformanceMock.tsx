"use client";

import React, { useState } from 'react';
import { components, spacing } from '../../../../../config/design-system';

/**
 * Mock #2: Performance Optimization
 * Clean status rows and tiles - structure over speed claims
 * Measured, calm, and controlled aesthetic
 */
export function PerformanceMock() {
  const [mode, setMode] = useState<'baseline' | 'optimized'>('optimized');

  return (
    <div className="flex flex-col h-full min-h-0 overflow-hidden">
      {/* Top anchor: Header row with toggle - stacks on mobile */}
      <div className="flex flex-wrap items-center justify-end gap-4 shrink-0">
        {/* Mode toggle */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() => setMode('baseline')}
            className={`${components.button.radius} px-2.5 py-2 text-xs font-medium ${
              mode === 'baseline'
                ? 'bg-cta-bg text-cta-text'
                : 'bg-bg-neutral border border-border-subtle text-text-muted'
            }`}
          >
            Baseline
          </button>
          <button
            type="button"
            onClick={() => setMode('optimized')}
            className={`${components.button.radius} px-2.5 py-2 text-xs font-medium ${
              mode === 'optimized'
                ? 'bg-cta-bg text-cta-text'
                : 'bg-bg-neutral border border-border-subtle text-text-muted'
            }`}
          >
            Optimized
          </button>
        </div>
      </div>

      {/* Inner scroll area: All content that can exceed height */}
      <div 
        className="flex-1 min-h-0 overflow-y-auto overscroll-contain pr-1"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="flex flex-col gap-y-6">
          {/* Status strip: Compact chips - allow wrap */}
          <div className="flex flex-wrap items-center gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`${components.button.radius} ${
                  mode === 'optimized'
                    ? 'bg-cta-bg text-cta-text'
                    : 'bg-bg-neutral border border-border-subtle text-text-muted'
                } px-2.5 py-1 text-xs font-medium shrink-0`}
              >
                {mode === 'optimized' ? 'OK' : 'Needs'}
              </div>
            ))}
          </div>

          {/* Dominant content: Asset list */}
          <div className={`${components.card.base} ${spacing.card.px} ${spacing.card.py} bg-bg-default min-w-0`}>
            <div className="flex flex-col gap-y-3">
              {['IMG', 'JS', 'CSS'].map((type) => (
                <div key={type} className="flex items-center justify-between gap-3 min-w-0">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className={`${components.surface.radius} ${
                      mode === 'optimized'
                        ? 'bg-cta-bg text-cta-text'
                        : 'bg-bg-neutral text-text-muted'
                    } h-6 w-6 flex items-center justify-center text-xs shrink-0`}>
                      {mode === 'optimized' ? '✓' : '!'}
                    </div>
                    <div className={`bg-text-secondary h-2.5 ${components.surface.radius} w-20 shrink-0`}></div>
                  </div>
                  <div className={`${components.button.radius} bg-bg-neutral border border-border-subtle px-2 py-1 text-xs text-text-muted shrink-0`}>
                    {type}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary supporting block: Progress indicators with varying fills */}
          <div className={`${components.card.base} ${spacing.card.px} ${spacing.card.py} bg-bg-neutral`}>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center justify-between gap-3 min-w-0">
                <div className={`bg-text-muted h-2 ${components.surface.radius} w-16 shrink-0`}></div>
                <div className={`${components.surface.radius} bg-bg-default h-2 w-full overflow-hidden min-w-0 flex-1`}>
                  <div className={`bg-cta-bg h-full ${mode === 'optimized' ? 'w-4/5' : 'w-2/5'}`}></div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 min-w-0">
                <div className={`bg-text-muted h-2 ${components.surface.radius} w-16 shrink-0`}></div>
                <div className={`${components.surface.radius} bg-bg-default h-2 w-full overflow-hidden min-w-0 flex-1`}>
                  <div className={`bg-cta-bg h-full ${mode === 'optimized' ? 'w-3/4' : 'w-1/2'}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

