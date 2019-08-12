export const filters = [
  {
    filterType: 'size',
    filterParams:   [
      { value: 0, label: 'small' },
      { value: 1, label: 'medium' },
      { value: 2, label: 'large' }
    ]
  },
  {
    filterType: 'light',
    filterParams:   [
      { value: 0, label: 'low' },
      { value: 1, label: 'partial' },
      { value: 2, label: 'full' }
    ]
  },
  {
    filterType: 'maintenance',
    filterParams:   [
      { value: 0, label: 'easy' },
      { value: 1, label: 'intermediate' },
      { value: 2, label: 'hard' },
    ]
  },
  {
    filterType: 'category',
    filterParams:   [
      { value: 0, label: 'houseplant' },
      { value: 1, label: 'herb' },
    ]
  },
]
