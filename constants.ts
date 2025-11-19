import { 
  Truck, 
  FileCheck, 
  QrCode, 
  Stamp, 
  Scale, 
  Briefcase, 
  ShieldCheck,
  Clock,
  TrendingUp,
  BadgeCheck,
  Container,
  Users,
  Store,
  Globe
} from 'lucide-react';
import { ServiceItem, BenefitItem, StepItem, TargetAudienceItem } from './types';

export const WHATSAPP_LINK = "https://wa.me/79038911468";
export const PHONE_NUMBER = "+7 (903) 891-14-68";
export const ADDRESS = "Садовод, корпус А, вход 5, этаж 1, офис 1Г-100";

export const SERVICES: ServiceItem[] = [
  {
    title: "Импорт под ключ",
    description: "Доставка товаров из любой страны с оформлением всех документов.",
    icon: Globe
  },
  {
    title: "Разрешительные документы",
    description: "Сертификаты, декларации, лицензии, СГР.",
    icon: FileCheck
  },
  {
    title: "Маркировка «Честный Знак»",
    description: "Регистрация, нанесение, отчётность.",
    icon: QrCode
  },
  {
    title: "Сертификация",
    description: "Документы для торговли и импорта по всем стандартам.",
    icon: BadgeCheck
  },
  {
    title: "Логистика и доставка",
    description: "Оптимальные маршруты и сроки.",
    icon: Truck
  },
  {
    title: "Бухгалтерия и Юристы",
    description: "Полное юридическое и бухгалтерское сопровождение.",
    icon: Scale
  },
  {
    title: "Комплексное сопровождение",
    description: "Решение всех бизнес-задач в одном окне.",
    icon: Briefcase
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: "Правильное оформление",
    description: "Полное соответствие законодательству РФ.",
    icon: Stamp
  },
  {
    title: "Скорость работы",
    description: "Оперативное прохождение таможенных процедур.",
    icon: Clock
  },
  {
    title: "Отсутствие штрафов",
    description: "Минимизация рисков и защита от проверок.",
    icon: ShieldCheck
  },
  {
    title: "Безопасность и законность",
    description: "Прозрачные схемы работы.",
    icon: TrendingUp
  }
];

export const WORKFLOW_STEPS: StepItem[] = [
  { id: 1, title: "Заявка" },
  { id: 2, title: "Анализ" },
  { id: 3, title: "Оформление" },
  { id: 4, title: "Доставка" },
  { id: 5, title: "Документы" },
];

export const TARGET_AUDIENCE: TargetAudienceItem[] = [
  { title: "Импортёры", description: "Для тех, кто возит грузы из-за рубежа." },
  { title: "Предприниматели", description: "Для тех, кто строит системный бизнес." },
  { title: "Продавцы на «Садоводе»", description: "Легализация товара и документов." },
];

export const MANDATORY_TEXTS = {
  exp: "Более 25 лет опыта",
  official: "Работаем официально",
  warehouse: "Собственный Таможенный Склад",
  slogan: "ВКС — один партнёр для честного и безопасного бизнеса"
};