import React from 'react';
import { GoogleIcon, GoogleIconProps } from '@/components/shared/GoogleIcon';

export interface IconBaseProps extends Omit<GoogleIconProps, 'name'> {
  size?: number | string;
  color?: string;
  className?: string;
  strokeWidth?: number; // for lucide prop compatibility
}

const createIcon = (defaultName: string, defaultFill = false) => {
  const IconComponent: React.FC<IconBaseProps> = ({
    size = 20,
    color,
    className,
    fill = defaultFill,
    strokeWidth,
    weight,
    ...props
  }) => {
    // Map strokeWidth to Google font weight if provided
    const calculatedWeight = weight ?? (strokeWidth ? Math.round(strokeWidth * 200) : 400);

    return (
      <GoogleIcon
        name={defaultName}
        size={size}
        color={color}
        className={className}
        fill={fill}
        weight={calculatedWeight}
        {...props}
      />
    );
  };
  IconComponent.displayName = `GoogleIcon_${defaultName}`;
  return IconComponent;
};

// Navigation & Arrows
export const ArrowRight = createIcon('arrow_forward');
export const ArrowLeft = createIcon('arrow_back');
export const ArrowUpRight = createIcon('north_east');
export const ChevronDown = createIcon('keyboard_arrow_down');
export const ChevronUp = createIcon('keyboard_arrow_up');
export const ChevronRight = createIcon('chevron_right');
export const RotateCcw = createIcon('refresh');

// Actions & Controls
export const Search = createIcon('search');
export const SearchX = createIcon('search_off');
export const Menu = createIcon('menu');
export const X = createIcon('close');
export const Plus = createIcon('add');
export const Send = createIcon('send');
export const Trash2 = createIcon('delete');
export const Download = createIcon('download');
export const Share2 = createIcon('share');
export const Maximize2 = createIcon('fullscreen');
export const SlidersHorizontal = createIcon('tune');
export const Play = createIcon('play_arrow');

// Status & Indicators
export const Check = createIcon('check');
export const CheckCircle = createIcon('check_circle', true);
export const CheckCircle2 = createIcon('check_circle', true);
export const XCircle = createIcon('cancel', true);
export const AlertCircle = createIcon('error', true);
export const HelpCircle = createIcon('help');
export const Info = createIcon('info');
export const Loader2 = createIcon('progress_activity');

// Domain & Academy Concepts
export const Sparkles = createIcon('auto_awesome');
export const Award = createIcon('workspace_premium');
export const ShieldCheck = createIcon('verified_user');
export const GraduationCap = createIcon('school');
export const BookOpen = createIcon('menu_book');
export const BookCheck = createIcon('fact_check');
export const Briefcase = createIcon('work');
export const Building = createIcon('domain');
export const Building2 = createIcon('apartment');
export const Users = createIcon('groups');
export const UserCheck = createIcon('how_to_reg');
export const Clock = createIcon('schedule');
export const Timer = createIcon('timer');
export const Calendar = createIcon('calendar_today');
export const Compass = createIcon('explore');
export const Target = createIcon('track_changes');
export const Lightbulb = createIcon('lightbulb');
export const TrendingUp = createIcon('trending_up');
export const BarChart3 = createIcon('bar_chart');
export const Activity = createIcon('monitoring');
export const HeartPulse = createIcon('ecg_heart');
export const Cpu = createIcon('memory');
export const Brain = createIcon('psychology');
export const Database = createIcon('database');
export const Layers = createIcon('layers');
export const Code2 = createIcon('code');
export const FileCode2 = createIcon('code');
export const FileText = createIcon('description');
export const FileCheck = createIcon('assignment_turned_in');
export const MessageSquare = createIcon('chat_bubble');
export const MessagesSquare = createIcon('forum');
export const Mail = createIcon('mail');
export const Phone = createIcon('call');
export const PhoneCall = createIcon('call');
export const MapPin = createIcon('location_on');
export const Lock = createIcon('lock');
export const Zap = createIcon('bolt');
export const Home = createIcon('home');
export const Headphones = createIcon('support_agent');
export const Rocket = createIcon('rocket_launch');
export const Stethoscope = createIcon('medical_services');
export const Star = createIcon('star');
export const LineChart = createIcon('show_chart');
export const FileCheck2 = createIcon('assignment_turned_in');
export const MessageCircle = createIcon('chat');
export const Laptop = createIcon('laptop_mac');
export const Wrench = createIcon('build');
export const Code = createIcon('code');
export const AlertTriangle = createIcon('warning', true);
export const IdCard = createIcon('badge');
export const ScrollText = createIcon('article');
export const FileUser = createIcon('account_box');
export const Pin = createIcon('push_pin');
export const FileSearch = createIcon('find_in_page');
