export const getInstructions = (mode) => {
    switch (mode) {
        case 'paraphrase':
            return (
                <p>
                    You will be given an example of a Complex command. You are
                    requested to write a complex command that is similar to the
                    example, but different in some way. You can change the app,
                    the action, the object, or the context.The overall structure
                    of the complex command should remain the same.
                </p>
            );
        case 'rewrite-simple-complex':
            return (
                <p>
                    You will be given a{' '}
                    <span className="bold">Simple command</span> as an example.
                    Your task is to create a{' '}
                    <span className="bold">Complex command</span> that
                    incorporates this Simple command in a Sequence, Condition,
                    or Multiplicity. You have the freedom to modify the app,
                    action, object, or context as needed.
                </p>
            );
        default:
            return (
                <p>
                    Now, you think of a Complex command you can ask your virtual
                    assistant that involves multiple apps (or the same app
                    multiple times).
                </p>
            );
    }
};
