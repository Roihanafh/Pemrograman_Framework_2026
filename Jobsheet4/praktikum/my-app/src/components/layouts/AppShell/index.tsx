import Navbar from "../navbar";

type AppShellProps = {
    children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    return (
        <main>
            <Navbar />
            {children}
            <div className="footer">
                <p>Copyright &copy; 2026 - Praktikum Next.js Pages Router</p>
            </div>
        </main>
    );
}

export default AppShell;