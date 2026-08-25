'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Send,
  Trash2,
  Calendar,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Award,
  ArrowRight,
  ShieldCheck,
  Plus,
} from 'lucide-react';
import { gsap, ScrollTrigger, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';
import styles from './WhyChooseBento.module.css';

export const WhyChooseBento: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isClient() || prefersReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const widgets = containerRef.current?.querySelectorAll(
        `.${styles.widgetMessage}, .${styles.widgetSchedule}, .${styles.widgetStats}, .${styles.widgetCurriculum}, .${styles.widgetSecurityNotice}, .${styles.widgetActivity}, .${styles.widgetSuggestion}, .${styles.widgetAccreditation}`
      );

      if (widgets && widgets.length > 0) {
        gsap.fromTo(
          widgets,
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: EASE.primary,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.bentoWrapper}>
      {/* =========================================================================
          ROW 1: MESSAGE COMPOSER & TODAY'S SCHEDULE
          ========================================================================= */}
      <div className={styles.rowTop}>
        {/* WIDGET 1: ADVISOR MESSAGE COMPOSER */}
        <div className={styles.widgetMessage}>
          <div className={styles.messageHeader}>
            <div className={styles.authorGroup}>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Dr. Priya Sharma"
                className={styles.authorAvatar}
              />
              <div className={styles.authorMeta}>
                <div className={styles.authorNameRow}>
                  <span className={styles.authorName}>Dr. Priya Sharma</span>
                  <span className={styles.authorTime}>Today, 10:12 am</span>
                </div>
                <span className={styles.authorRole}>Academic Director • YukthiMantra</span>
              </div>
            </div>
            <div className={styles.messageHeaderIcons}>
              <div className={styles.iconBtn}>
                <Send size={15} />
              </div>
              <div className={styles.iconBtn}>
                <Trash2 size={15} />
              </div>
            </div>
          </div>

          <p className={styles.messageBodyText}>
            Our curriculum is continuously aligned with top healthcare technology networks. Every cohort undergoes authentic case-study evaluations on clinical datasets to prepare for immediate industry readiness.
          </p>

          <div className={styles.messageComposerFooter}>
            <div className={styles.inputPill}>
              <span>Type your question to academic advisor...</span>
            </div>
            <div className={styles.reactionsGroup}>
              <span className={styles.emojiReaction}>👏</span>
              <span className={styles.emojiReaction}>❤️</span>
              <span className={styles.emojiReaction}>🔥</span>
              <span className={styles.emojiReaction}>⚡</span>
              <span className={styles.emojiReaction}>👍</span>
              <div className={styles.addEmojiBtn}>
                <Plus size={13} />
              </div>
            </div>
          </div>
        </div>

        {/* WIDGET 2: TODAY'S SCHEDULE */}
        <div className={styles.widgetSchedule}>
          <div className={styles.scheduleHeader}>
            <h4 className={styles.scheduleTitle}>Today&apos;s Cohort Plan</h4>
            <span className={styles.scheduleDate}>Live Practicum</span>
          </div>

          <div className={styles.scheduleToggleRow}>
            <span className={styles.toggleActive}>Scheduled</span>
            <span className={styles.toggleInactive}>Notes</span>
          </div>

          <div className={styles.timelineList}>
            <div className={styles.timelineItem}>
              <span className={styles.timelineItemTitle}>Clinical Coding Practicum</span>
              <span className={styles.timelineItemTime}>09:00 - 10:30</span>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.timelineItemTitle}>Healthcare SQL &amp; Data Warehouse</span>
              <span className={styles.timelineItemTime}>11:30 - 13:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ROW 2: FACULTY 2X2, WELCOME PROGRESS & NEXT COHORT DATE
          ========================================================================= */}
      <div className={styles.rowMiddle}>
        {/* WIDGET 3: 2X2 FACULTY PILL */}
        <div className={styles.widgetFacultyCluster}>
          <div className={styles.avatars2x2}>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
              alt="Faculty 1"
              className={styles.clusterImg}
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
              alt="Faculty 2"
              className={styles.clusterImg}
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
              alt="Faculty 3"
              className={styles.clusterImg}
            />
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
              alt="Faculty 4"
              className={styles.clusterImg}
            />
          </div>
          <div className={styles.clusterMeta}>
            <h5 className={styles.clusterTitle}>100% 1-on-1 Mentorship</h5>
            <span className={styles.clusterSubtitle}>+12 Domain Specialists</span>
          </div>
        </div>

        {/* WIDGET 4: WELCOME BACK PROGRESS NOTIFICATION */}
        <div className={styles.widgetWelcome}>
          <div className={styles.welcomeTop}>
            <div className={styles.welcomeUser}>
              <span className={styles.welcomeGreeting}>Active Learner Portal</span>
              <h4 className={styles.welcomeUserName}>Samantha L. (Data Science Track)</h4>
            </div>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
              alt="Samantha"
              className={styles.welcomeAvatar}
            />
          </div>

          <div className={styles.welcomeSubBar}>
            <span className={styles.subBarTime}>Today, 10:12 am</span>
            <span className={styles.subBarAction}>Mark as completed</span>
          </div>

          <div className={styles.projectNotificationBubble}>
            <div className={styles.bubbleIconWrap}>
              <MessageSquare size={14} />
            </div>
            <p className={styles.bubbleText}>
              Live Capstone Project: <strong>Hospital Readmission Prediction Model</strong> submitted for faculty review.
            </p>
          </div>
        </div>

        {/* WIDGET 5: CALENDAR / INTAKE DATE */}
        <div className={styles.widgetCalendarDate}>
          <span className={styles.calendarDay}>Rolling Intake</span>
          <h3 className={styles.calendarBigDate}>Every Month</h3>
          <div className={styles.calendarFooter}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=80&q=80"
              alt="Intake icon"
              className={styles.calendarSmallAvatar}
            />
            <span className={styles.calendarFooterText}>Degree Holders &amp; Final Year</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ROW 3: FACULTY LIST, PLACEMENT HUB & ACCREDITATION BADGES
          ========================================================================= */}
      <div className={styles.rowBottom}>
        {/* WIDGET 6: FACULTY DIRECTORY LIST (TALL LEFT) */}
        <div className={styles.widgetMentorsList}>
          <div className={styles.mentorsListHeader}>
            <h4 className={styles.mentorsHeading}>Faculty Mentors</h4>
            <div className={styles.addFriendsBtn}>
              <span className={styles.addFriendsText}>1-on-1 Guidance</span>
              <Plus size={13} />
            </div>
          </div>

          <div className={styles.mentorsSubCount}>
            <span>Certified Instructors</span>
            <span>24/7 Support</span>
          </div>

          {/* Mentors List */}
          <div className={styles.mentorsStack}>
            <div className={styles.mentorRow}>
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                alt="William Moore"
                className={styles.mentorAvatar}
              />
              <div className={styles.mentorInfo}>
                <span className={styles.mentorName}>William Moore</span>
                <span className={styles.mentorRole}>Healthcare Data Science Lead</span>
              </div>
              <div className={styles.mentorActionBtn}>
                <Plus size={14} />
              </div>
            </div>

            <div className={styles.mentorRow}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
                alt="Linda Wilson"
                className={styles.mentorAvatar}
              />
              <div className={styles.mentorInfo}>
                <span className={styles.mentorName}>Linda Wilson</span>
                <span className={styles.mentorRole}>Certified CPC &amp; CCS Instructor</span>
              </div>
              <div className={styles.mentorActionBtn}>
                <Plus size={14} />
              </div>
            </div>

            <div className={styles.mentorRow}>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                alt="Patricia Davis"
                className={styles.mentorAvatar}
              />
              <div className={styles.mentorInfo}>
                <span className={styles.mentorName}>Patricia Davis</span>
                <span className={styles.mentorRole}>Clinical AI &amp; LLM Researcher</span>
              </div>
              <div className={styles.mentorActionBtn}>
                <Plus size={14} />
              </div>
            </div>
          </div>

          {/* Bottom Floating Pill */}
          <Link href="/admission-counselling" className={styles.sendRequestPill}>
            <span>Book Free Counselling</span>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
              alt="Advisor"
              className={styles.pillAvatar}
            />
          </Link>
        </div>

        {/* RIGHT COLUMN CLUSTER */}
        <div className={styles.bottomRightCluster}>
          {/* WIDGET 7: YUKTHI CAMPUS PORTAL & PLACEMENT NETWORK */}
          <div className={styles.widgetCampus}>
            <div className={styles.campusTopBar}>
              <div className={styles.campusLocation}>
                <span className={styles.campusIcon}>🏥</span>
                <span className={styles.campusName}>Yukthi Healthcare Network &amp; LMS Cloud</span>
              </div>
              <div className={styles.activeStatusPill}>
                <span className={styles.greenPulse} />
                <span>24/7 Active</span>
              </div>
            </div>

            <div className={styles.placementPartnersArea}>
              <span className={styles.placementLabel}>Primary Placement &amp; Hiring Networks</span>
              <div className={styles.partnerRow}>
                <div className={styles.partnerUser}>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="Corporate Partner"
                    className={styles.partnerAvatar}
                  />
                  <div className={styles.partnerMeta}>
                    <span className={styles.partnerName}>Corporate Hiring Leads</span>
                    <span className={styles.partnerOrg}>Hospital Networks &amp; Health-Tech RCM</span>
                  </div>
                </div>

                <div className={styles.overlappingPartnerAvatars}>
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                    alt="P1"
                    className={styles.partnerMiniAvatar}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                    alt="P2"
                    className={styles.partnerMiniAvatar}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* TWO MINI WIDGETS SIDE-BY-SIDE */}
          <div className={styles.miniWidgetsRow}>
            {/* MINI WIDGET 8A: ELIGIBILITY CHECK SUGGESTION */}
            <div className={styles.widgetSuggestion}>
              <span className={styles.suggestionTop}>Yukthi Advisory Suggestion</span>
              <div className={styles.suggestionAvatarWrap}>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                  alt="Advisor"
                  className={styles.suggestionAvatar}
                />
              </div>
              <h6 className={styles.suggestionName}>Academic Verification</h6>
              <Link href="/eligibility" className={styles.suggestionHandle}>
                Check Degree Eligibility →
              </Link>
            </div>

            {/* MINI WIDGET 8B: ACCREDITATION LOGO CARD */}
            <div className={styles.widgetAccreditation}>
              <div className={styles.dolphinIconWrap}>
                <Award size={34} color="#0584C6" />
              </div>
              <h5 className={styles.accreditBrandTitle}>Yukthi Certified</h5>
              <span className={styles.accreditSub}>AAPC &amp; AHIMA Standards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
