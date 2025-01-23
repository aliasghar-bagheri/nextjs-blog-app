import { ComponentType, ReactNode, SVGProps } from 'react';

interface DashboardCardProps {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title?: ReactNode;
  value: ReactNode;
}

const DashboardCard = ({ Icon, title, value }: DashboardCardProps) => {
  return (
    <div className="py-4 px-8 min-w-60 rounded bg-secondary-0 flex items-center gap-x-2">
      <div className="p-3 rounded-full flex items-center justify-center gap-x-2">
        <Icon
          width={60}
          height={60}
          className="bg-secondary-300/50 p-2 rounded-2xl"
        />
        <div className="space-y-2">
          <h6 className="text-xs font-medium text-secondary-500 text-nowrap">{title}</h6>
          <p className="text-3xl mr-2 font-bold text-nowrap">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
