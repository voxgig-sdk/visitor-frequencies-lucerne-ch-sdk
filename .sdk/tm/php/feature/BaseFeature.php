<?php
declare(strict_types=1);

// VisitorFrequenciesLucerneCh SDK base feature

class VisitorFrequenciesLucerneChBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(VisitorFrequenciesLucerneChContext $ctx, array $options): void {}
    public function PostConstruct(VisitorFrequenciesLucerneChContext $ctx): void {}
    public function PostConstructEntity(VisitorFrequenciesLucerneChContext $ctx): void {}
    public function SetData(VisitorFrequenciesLucerneChContext $ctx): void {}
    public function GetData(VisitorFrequenciesLucerneChContext $ctx): void {}
    public function GetMatch(VisitorFrequenciesLucerneChContext $ctx): void {}
    public function SetMatch(VisitorFrequenciesLucerneChContext $ctx): void {}
    public function PrePoint(VisitorFrequenciesLucerneChContext $ctx): void {}
    public function PreSpec(VisitorFrequenciesLucerneChContext $ctx): void {}
    public function PreRequest(VisitorFrequenciesLucerneChContext $ctx): void {}
    public function PreResponse(VisitorFrequenciesLucerneChContext $ctx): void {}
    public function PreResult(VisitorFrequenciesLucerneChContext $ctx): void {}
    public function PreDone(VisitorFrequenciesLucerneChContext $ctx): void {}
    public function PreUnexpected(VisitorFrequenciesLucerneChContext $ctx): void {}
}
