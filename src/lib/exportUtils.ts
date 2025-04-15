/**
 * Utility functions for exporting data to different formats
 */

interface ExportableData {
  [key: string]: any;
}

/**
 * Convert JSON data to CSV format
 */
export const convertToCSV = (data: ExportableData[], columns: string[]): string => {
  // Create header row
  const header = columns.join(',') + '\n';
  
  // Create data rows
  const rows = data.map(item => {
    return columns.map(key => {
      // Handle special cases for boolean values
      if (typeof item[key] === 'boolean') {
        return item[key] ? 'Yes' : 'No';
      }
      
      // Convert value to string and handle commas and quotes
      const value = item[key] === null || item[key] === undefined ? '' : String(item[key]);
      const escaped = value.replace(/"/g, '""');
      
      // Wrap in quotes if contains commas, new lines or quotes
      return /[",\n]/.test(value) ? `"${escaped}"` : value;
    }).join(',');
  }).join('\n');
  
  return header + rows;
};

/**
 * Download data as a CSV file
 */
export const downloadCSV = (csvContent: string, filename: string): void => {
  // Create a blob with the CSV content
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  
  // Create a download link and trigger the download
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Format date for file naming
 */
export const getFormattedDate = (): string => {
  const date = new Date();
  return date.toISOString().split('T')[0]; // YYYY-MM-DD format
};
