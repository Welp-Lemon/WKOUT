# WKOUT Change Notes

## 2026-06-25

- Rebranded the dashboard from Codex Training to WKOUT with a Matrix-style logo mark.
- Replaced the Daniel banner with DAD WKOUT: Discipline. Action. Drive.
- Changed the 39-second elbows-to-knees countdown into REPSTREAM, an upward session timer for recording workout duration.
- Kept the Rest Timer as a 60-second countdown.
- Added session duration to workout history entries.
- Upgraded opt-in SFX with Matrix clicks, set-complete feedback, timer-finish beeps, and a workout-complete flourish.
- Preserved the one-file static app shape for GitHub Pages deployment from the repository root.
## 2026-06-26

- Added PWA support with a web app manifest, service worker, install icons, and iPad home-screen metadata.
- Registered the service worker only on HTTP/HTTPS so local file testing remains safe.
- Configured fullscreen landscape launch behavior for iPad and GitHub Pages.
## 2026-06-26 - Workout Mode

- Added a dedicated full-screen Workout Mode for lifting with a giant DONE button.
- Rest Mode shows REST/GO status while keeping the next exercise visible.
- Added Rest Mode with a 60-second countdown, READY, Pause, Skip, and obvious GO state.
- Added Mission Complete with Log Workout and Return to Dashboard actions.
- Preserved dashboard planning, set dots, active sequencing, localStorage, Dad Mode, recovery modal, hologram, SFX, and timers.
- Updated in-app copy for DAD BOD, MUSCLES WORKING, TODAY'S SESSION, HOW'D THAT FEEL?, and Saved.

## 2026-06-26 - Dashboard Start Panel

- Replaced the main dashboard Notes card with a dedicated Start Workout panel.
- Moved notes into the post-workout Mission Complete screen so typing stays out of the lifting flow.
- Kept Start Workout wired directly into Workout Mode while preserving existing workout data and localStorage.

## 2026-06-26 - WKOUT Phase 1.2 Feedback

- Simplified the default dashboard into a focused pre-workout screen with today's session, focus, warm-up, and START WORKOUT.
- Added guided warm-up and cool-down steps to Workout Mode with large NEXT/SKIP controls.
- Added form reference cards, live Workout Mode clock, clearer superset movement cards, and lighter animation behavior during lifting.
