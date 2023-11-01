import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

function AdminLayout({ children }) {
    return (
        <div>
            <Header></Header>
            {children}
            <Sidebar></Sidebar>
        </div>
    );
}

export default AdminLayout;
