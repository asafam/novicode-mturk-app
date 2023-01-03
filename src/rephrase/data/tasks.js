export const getTaskDescription = (mode) => {
    switch (mode) {
        case 'paraphrase':
            return (
                <p>
                    You will be given an example of a Complex command. You are
                    requested to write a Complex command that is similar to the
                    example, but different in some way. You can change the app,
                    the action, the object, or the context. The overall
                    structure of the complex command should remain the same.
                </p>
            );
        case 'rewrite-complex-different-apps':
            return (
                <p>
                    You will be given a valid{' '}
                    <span className="bold">Complex command</span> that
                    incorporates one or more Simple app commands in a Sequence,
                    Condition, or Multiplicity. Modify the Complex command to
                    use different apps, while keeping the same format. You can
                    change the apps used, the details, or the context.
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
