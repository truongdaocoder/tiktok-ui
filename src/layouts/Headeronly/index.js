import Header from '~/layouts/components/Header';
function Headeronly({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default Headeronly;
