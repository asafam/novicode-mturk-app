export const getExamples = (mode) => {
    switch (mode) {
        case 'rewrite-complex-different-apps':
            return [
                {
                    complexOrig:
                        'If it rains tomorrow then remind me to bring an umbrella .',
                    complexNew:
                        "If I leave now and arrive home after 7 pm then text my wife that I'm on my way.",
                    caption:
                        "Modify the command to use the Navigation and Messages apps, while keeping the same 'IF' Condition format."
                },
                {
                    complexOrig:
                        "Route to the mall and from there to the doctor's office.",
                    complexNew:
                        'Set a timer for 15 minutes and another for 30 minutes.',
                    caption:
                        "Modify the command to use the Clock app while keeping the same Sequence format with the 'AND' word in the middle."
                },
                {
                    complexOrig:
                        'Remove all reminders for this week to pick up my sister.',
                    complexNew:
                        'Archive all emails that are mark as read from my boss.',
                    caption:
                        "Modify the command to use the Email app while keeping the same Multiplicity format indicated by the 'ALL' word."
                }
            ];
        case 'rewrite-simple-complex':
            return [
                {
                    simple: 'Will it rain tomorrow?',
                    complex:
                        'Remind me to bring an umbrella if it rains tomorrow in Manhattan.',
                    caption: 'Turn to a Condition'
                },
                {
                    simple: 'Route to the mall?',
                    complex:
                        "Route to the mall and from there to the doctor's office.",
                    caption: 'Turn to a Sequence'
                },
                {
                    simple: 'Remove reminder to pick up my sister.',
                    complex:
                        'Remove all reminders for this week to pick up my sister.',
                    caption: 'Turn to a Repitition'
                }
            ];
        default:
            return [];
    }
};
