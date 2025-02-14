const selectedExperiments = {
    name: 'selectedExperiments',
    title: 'Selected Experiments',
    type: 'document',
    fields: [
      {
        name: 'experiments',
        title: 'Experiments',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'experiment',
            title: 'Experiment',
            fields: [
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                  hotspot: true,
                },
              },
            ],
          },
        ],
      },
    ],
};

export default selectedExperiments;
  