#include <iostream>
#include <string>
#include <memory>

class ExportStrategy {
public:
    virtual ~ExportStrategy() = default;
    virtual void exportData(const std::string& data) const = 0;
};

class PdfExportStrategy : public ExportStrategy {
public:
    void exportData(const std::string& data) const override {
        std::cout << "Exporting to PDF: " << data << std::endl;
    }
};

class CsvExportStrategy : public ExportStrategy {
public:
    void exportData(const std::string& data) const override {
        std::cout << "Exporting to CSV: " << data << std::endl;
    }
};

class XmlExportStrategy : public ExportStrategy {
public:
    void exportData(const std::string& data) const override {
        std::cout << "Exporting to XML: " << data << std::endl;
    }
};

// aqui o conceito que usa o strategy
class Exporter {
private:
    std::unique_ptr<ExportStrategy> strategy;

public:
    explicit Exporter(std::unique_ptr<ExportStrategy> strategy)
        : strategy(std::move(strategy)) {}

    void setStrategy(std::unique_ptr<ExportStrategy> newStrategy) {
        strategy = std::move(newStrategy);
    }

    void executeExport(const std::string& data) const {
        if (strategy) {
            strategy->exportData(data);
        } else {
            std::cerr << "No export strategy set!" << std::endl;
        }
    }
};

int main() {
    std::string data = "Sample data to export";

    Exporter exporter(std::make_unique<PdfExportStrategy>());
    exporter.executeExport(data);  // PDF

    exporter.setStrategy(std::make_unique<CsvExportStrategy>());
    exporter.executeExport(data);  // CSV

    exporter.setStrategy(std::make_unique<XmlExportStrategy>());
    exporter.executeExport(data);  // XML

    return 0;
}