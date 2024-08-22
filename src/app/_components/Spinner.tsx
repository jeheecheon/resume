interface SpinnerProps {
    className: string;
}

function Spinner({ className }: SpinnerProps) {
    return (
        <div className={`flex ${className} animate-fade-in-lazy`}>
            <div className="m-auto w-10 h-10 border-4 rounded-full border-gray-200 border-t-orange-400 animate-spin" />
        </div>
    );
}

export default Spinner;
