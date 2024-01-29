import DashboardContentWrapper from '@/components/dashboard-content-wrapper';
import { breadcrumbItems } from './data';
import RoleAdd from './comps/role-add';
import RoleFilter from './comps/role-filter';
import { Button } from '@/components/ui/button';
import RoleList from './comps/role-list';

export default function Roles() {
    return (
        <DashboardContentWrapper breadcrumbsItems={breadcrumbItems}>
            <div className="space-y-2">
                <p className="text-lg font-bold">Roles</p>

                <div className="flex items-center">
                    <RoleAdd />

                    <div className=" ml-auto flex items-center">
                        <RoleFilter />
                    </div>
                </div>

                <div>
                    <RoleList />
                </div>
            </div>
        </DashboardContentWrapper>
    );
}
